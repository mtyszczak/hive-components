import { DefaultRenderer } from "@hiveio/content-renderer";

export const renderPostContent = (
  content: string,
  options?: {
    breaks?: boolean;
    doNotShowImages?: boolean;
  }
) => {
  const renderer = new DefaultRenderer({
    baseUrl: "https://hive.blog/",
    breaks: options?.breaks ?? true,
    skipSanitization: false,
    allowInsecureScriptTags: false,
    addNofollowToLinks: true,
    cssClassForInternalLinks: "hive-class",
    doNotShowImages: options?.doNotShowImages ?? false,
    assetsWidth: 640,
    assetsHeight: 480,
    addTargetBlankToLinks: true,
    imageProxyFn: url => url,
    usertagUrlFn: account => "https://hive.blog/@" + account,
    hashtagUrlFn: hashtag => "https://hive.blog/trending/" + hashtag,
    isLinkSafeFn: () => true,
    addExternalCssClassToMatchingLinksFn: () => true,
  });

  return renderer.render(content);
};
