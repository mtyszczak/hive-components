import { DefaultRenderer } from '@hiveio/content-renderer';

export const renderPostContent = (content: string) => {
  const renderer = new DefaultRenderer({
    baseUrl: "https://hive.blog/",
    breaks: true,
    skipSanitization: false,
    allowInsecureScriptTags: false,
    addNofollowToLinks: true,
    cssClassForInternalLinks: "hive-class",
    doNotShowImages: false,
    assetsWidth: 640,
    assetsHeight: 480,
    imageProxyFn: (url) => url,
    usertagUrlFn: (account) => "https://hive.blog/@" + account,
    hashtagUrlFn: (hashtag) => "https://hive.blog/trending/" + hashtag,
    isLinkSafeFn: () => true,
    addExternalCssClassToMatchingLinksFn: () => true
  });

  return renderer.render(content);
};
