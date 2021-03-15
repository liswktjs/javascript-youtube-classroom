import { LOCAL_STORAGE_SAVED_VIDEO_KEY, SNACKBAR_MESSAGE, MAX_NUM_OF_SAVED_VIDEO } from '../constants/index.js';
import { getLocalStorageItem, setLocalStorageItem, showSnackbar } from '../util/index.js';

export const SAVED_VIDEO_SUBSCRIBER_KEY = Object.freeze({
  SAVE: 'save',
  DELETE: 'delete',
  CHECK: 'check',
});

export class SavedVideoManager {
  constructor(defaultValue = {}) {
    const { SAVE, DELETE, CHECK } = SAVED_VIDEO_SUBSCRIBER_KEY;

    this.subscribers = {
      [SAVE]: [],
      [DELETE]: [],
      [CHECK]: [],
    };
    this.savedVideos = getLocalStorageItem({ key: LOCAL_STORAGE_SAVED_VIDEO_KEY, defaultValue });
  }

  subscribe({ key, subscriber }) {
    this.subscribers[key].push(subscriber);
  }

  unsubscribe({ key, subscriber }) {
    const subscriberIndex = this.subscribers[key].indexOf(subscriber);

    if (subscriberIndex === -1) {
      return;
    }

    this.subscribers[key].splice(subscriberIndex, 1);
  }

  saveVideo(videoId) {
    if (this.getSavedVideoIdList().length >= MAX_NUM_OF_SAVED_VIDEO) {
      return false;
    }

    this.setState({
      key: SAVED_VIDEO_SUBSCRIBER_KEY.SAVE,
      videoId,
      savedVideos: { ...this.savedVideos, [videoId]: { isChecked: false, updateDate: Date.now() } },
    });

    return true;
  }

  deleteVideo(videoId) {
    const nextSavedVideos = { ...this.savedVideos };
    delete nextSavedVideos[videoId];

    this.setState({
      key: SAVED_VIDEO_SUBSCRIBER_KEY.DELETE,
      savedVideos: nextSavedVideos,
    });
  }

  checkVideo(videoId) {
    const nextSavedVideos = { ...this.savedVideos };
    nextSavedVideos[videoId].updateDate = Date.now();
    nextSavedVideos[videoId].isChecked = !nextSavedVideos[videoId].isChecked;

    this.setState({
      key: SAVED_VIDEO_SUBSCRIBER_KEY.CHECK,
      savedVideos: nextSavedVideos,
    });
  }

  getSavedVideos() {
    return { ...this.savedVideos };
  }

  getSavedVideoIdList() {
    return Object.keys(this.savedVideos);
  }

  getSortedSavedVideoIdList() {
    return Object.keys(this.savedVideos).sort(
      (a, b) => this.savedVideos[b].updateDate - this.savedVideos[a].updateDate
    );
  }

  setState({ key, videoId, savedVideos }) {
    if (this.savedVideos === savedVideos) {
      return;
    }

    this.savedVideos = savedVideos;
    setLocalStorageItem({ key: LOCAL_STORAGE_SAVED_VIDEO_KEY, item: this.savedVideos });

    this.notify(key, videoId);
  }

  notify(key, videoId) {
    this.subscribers[key].forEach(subscriber => subscriber(videoId));
  }
}