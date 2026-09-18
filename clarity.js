import Clarity from "@microsoft/clarity";
import { $listen } from "ladrillosjs/events";

const consentKey = "ladrillosjs-clarity-consent";
const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
let clarityStarted = false;

function readConsent()
{
  try
  {
    return localStorage.getItem(consentKey);
  } catch
  {
    return null;
  }
}

function storeConsent(value)
{
  try
  {
    localStorage.setItem(consentKey, value);
  } catch
  {
    // Consent still applies to this page when storage is unavailable.
  }
}

function startClarity()
{
  if (!projectId || clarityStarted) return;

  Clarity.init(projectId);
  Clarity.consentV2({
    ad_Storage: "denied",
    analytics_Storage: "granted",
  });
  clarityStarted = true;
}

if (readConsent() === "granted") startClarity();

$listen("clarity-consent-change", (consent) =>
{
  if (consent !== "granted" && consent !== "denied") return;

  storeConsent(consent);

  if (consent === "granted")
  {
    startClarity();
  } else if (clarityStarted)
  {
    Clarity.consentV2({
      ad_Storage: "denied",
      analytics_Storage: "denied",
    });
    window.location.reload();
  }
});