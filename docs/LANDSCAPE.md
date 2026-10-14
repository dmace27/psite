# Home page landscape

The current asset is `public/images/schwabachers-landing-sunrise.png`, based on
[Sean Hoyt’s sunrise panorama from Schwabacher Landing](https://seanhoyt.com/blogs/journal/teton-mountains-from-schwabacher-landing).
His article describes stitching sixteen photographs into the panorama. The
visible credit links to the source; the photographer’s signature is retained
in the edited asset. This is a local design preview; no publication was performed.

The built-in image generation tool removed the sky to transparency. CSS keeps
50% maximum opacity with a vertical fade, layers the text above the photograph,
and anchors the scene to the bottom of the viewport. Its height is 31vh, matching
Matthew Hamilton’s bottom scene (223px at a 720px viewport height). It adds no
extra page height. The crop prioritizes the peaks and treeline within that band.

Final edit prompt:

> Background-extraction edit of the supplied Sean Hoyt photographic panorama of sunrise at Schwabacher Landing, Grand Tetons. Remove only sky and clouds above the real mountain skyline and trees to transparent alpha; preserve exact real mountain silhouettes and warm golden orange sunrise light, forest, meadow, river, and reflections. Preserve photographer watermark/signature in bottom right. Keep all river including reflected clouds opaque. Preserve framing and original wide 2000:932 aspect ratio; do not regenerate or add landscape. Photographic realism and natural colors, exact original composition. Full opacity landscape; CSS applies opacity and crop separately. Clean antialiased edges.
