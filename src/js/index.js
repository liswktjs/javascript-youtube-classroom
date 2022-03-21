import '../css/index.css';
import '../assets/images/not_found.png';
import '../assets/images/empty_img.png';

import { $, quickModalElement } from './util/general.js';
import { THROTTLE_DELAY } from './constants/constants.js';
import { applyThrottle } from './util/throttle.js';
import { SearchEventHandler } from './modules/handleSearchEvent.js';
import { WatchLaterVideoEventHandler } from './modules/handleWatchLaterVideoEvent.js';
import { WatchedVideoEventHandler } from './modules/handleWatchedVideoEvent.js';
import watchLaterView from './ui/watchLaterView.js';

export default function App() {
  const handleSearchEvent = new SearchEventHandler();
  const handleWatchLaterEvent = new WatchLaterVideoEventHandler();
  const handleWatchedVideoEvent = new WatchedVideoEventHandler();

  watchLaterView.renderWatchLaterVideos();
  $('#search-modal-button').addEventListener('click', () => {
    $('.modal-container').classList.toggle('hidden');
  });

  $('#search-button').addEventListener('click', handleSearchEvent.handleSearch);

  $('#search-input-keyword').addEventListener('keypress', e => {
    if (e.key === 'Enter') handleSearchEvent.handleSearch();
  });

  $('.video-list').addEventListener(
    'scroll',
    applyThrottle(handleSearchEvent.handleScroll, THROTTLE_DELAY),
  );

  $('.video-list').addEventListener('click', handleSearchEvent.handleSaveButtonClick);

  $('.dimmer').addEventListener('click', quickModalElement);
  $('.search-modal-close-button').addEventListener('click', quickModalElement);
  $('.watch-later-nav-button').addEventListener('click', handleWatchLaterEvent.handleWatchLater);
  $('.watched-nav-button').addEventListener('click', handleWatchedVideoEvent.handleWatchedVideo);

  $('.watch-later-videos-container ul').addEventListener(
    'click',
    handleWatchLaterEvent.handleWatchedButtonClick,
  );
  $('.watch-later-videos-container ul').addEventListener(
    'click',
    handleWatchLaterEvent.handleDeleteButtonClick,
  );

  $('.watched-videos-container ul').addEventListener(
    'click',
    handleWatchedVideoEvent.handledWatchedButtonClick,
  );
  $('.watched-videos-container ul').addEventListener(
    'click',
    handleWatchedVideoEvent.handleDeleteButtonClick,
  );
}

App();
