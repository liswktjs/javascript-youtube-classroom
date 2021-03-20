/* eslint-disable class-methods-use-this */
import { CLASSNAME } from "./constants/index.js";
import { $ } from "./utils/DOM.js";
import SearchContainer from "./Search/SearchContainer.js";
import WatchLaterContainer from "./WatchLater/WatchLaterContainer.js";
import HistoryContainer from "./History/HistoryContainer.js";

export default class App {
  constructor() {
    this.$watchLaterTabButton = $(`.${CLASSNAME.WATCH_LATER_TAB}`);
    this.$historyTabButton = $(`.${CLASSNAME.HISTORY_TAB}`);
    this.$searchTabButton = $(`.${CLASSNAME.SEARCH_TAB}`);

    this.watchLaterContainer = new WatchLaterContainer();
    this.historyContainer = new HistoryContainer();
    this.searchContainer = new SearchContainer();

    this.$watchLaterTabButton.addEventListener("click", () => {
      this.historyContainer.hide();
      this.deactivateTabButton(this.$historyTabButton);

      this.watchLaterContainer.show();
      this.activateTabButton(this.$watchLaterTabButton);
    });

    this.$historyTabButton.addEventListener("click", () => {
      this.watchLaterContainer.hide();
      this.deactivateTabButton(this.$watchLaterTabButton);

      this.historyContainer.show();
      this.activateTabButton(this.$historyTabButton);
    });

    this.$searchTabButton.addEventListener(
      "click",
      this.searchContainer.open.bind(this.searchContainer)
    );
  }

  activateTabButton($tabButton) {
    $.addClass($tabButton, CLASSNAME.BG_CYAN_100);
  }

  deactivateTabButton($tabButton) {
    $.removeClass($tabButton, CLASSNAME.BG_CYAN_100);
  }
}
