'use strict';

const isFocusSearchFieldCheckbox = document.querySelector('#isFocusSearchField');

const isShowThumbnailsCheckbox = document.querySelector('#isShowThumbnails');

const isShowMediaInfoCheckbox = document.querySelector('#isShowMediaInfo');
const isShowFilesCheckbox = document.querySelector('#isShowFiles');
const isShowNfoCheckbox = document.querySelector('#isShowNFO');
const maxBlockHeightInput = document.querySelector('#maxBlockHeight');

const isMarkLinksCheckbox = document.querySelector('#isMarkLinks');




// load and show options
chrome.storage.sync.get('options', function({options}) {
  l('storage.get()', options);

  isFocusSearchFieldCheckbox.checked = options.isFocusSearchField;

  isShowThumbnailsCheckbox.checked = options.isShowThumbnails;

  isShowMediaInfoCheckbox.checked = options.isShowMediaInfo;
  isShowFilesCheckbox.checked = options.isShowFiles;
  isShowNfoCheckbox.checked = options.isShowNFO;
  maxBlockHeightInput.valueAsNumber = options.maxBlockHeight;

  isMarkLinksCheckbox.checked = options.isMarkLinks;
});




// save options
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const options = {
    isFocusSearchField: isFocusSearchFieldCheckbox.checked,

    isShowThumbnails: isShowThumbnailsCheckbox.checked,

    isShowMediaInfo: isShowMediaInfoCheckbox.checked,
    isShowFiles: isShowFilesCheckbox.checked,
    isShowNFO: isShowNfoCheckbox.checked,
    maxBlockHeight: maxBlockHeightInput.valueAsNumber || undefined, // 0 will be stored as undefined

    isMarkLinks: isMarkLinksCheckbox.checked,
  };

  chrome.storage.sync.set({options}, window.close);
});
