import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import EventItemPreview from "./preview-templates/EventItemPreview";
import ImNewPagePreview from "./preview-templates/ImNewPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import BeliefsPagePreview from "./preview-templates/BeliefsPagePreview";
import CreditsPagePreview from "./preview-templates/CreditsPagePreview";
import GivePagePreview from "./preview-templates/GivePagePreview";
import LeadershipPagePreview from "./preview-templates/LeadershipPagePreview";
import FooterPreview from "./preview-templates/FooterPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("im-new", ImNewPagePreview);
CMS.registerPreviewTemplate("events", EventItemPreview);
CMS.registerPreviewTemplate("beliefs", BeliefsPagePreview);
CMS.registerPreviewTemplate("credits", CreditsPagePreview);
CMS.registerPreviewTemplate("give", GivePagePreview);
CMS.registerPreviewTemplate("leadership", LeadershipPagePreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
