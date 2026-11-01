"use client";

import { useCallback, useSyncExternalStore } from "react";
import { SIDEBAR_COOKIE, SIDEBAR_EVENT } from "./sidebarState";

function subscribe(callback) {
  window.addEventListener(SIDEBAR_EVENT, callback);
  return () => window.removeEventListener(SIDEBAR_EVENT, callback);
}

const getSnapshot = () => document.documentElement.dataset.sidebar !== "closed";
const getServerSnapshot = () => true;

export default function useSidebar() {
  const open = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = !getSnapshot();
    const value = next ? "open" : "closed";
    document.documentElement.dataset.sidebar = value;
    document.cookie = `${SIDEBAR_COOKIE}=${value}; path=/; max-age=31536000; samesite=lax`;
    window.dispatchEvent(new Event(SIDEBAR_EVENT));
  }, []);

  return [open, toggle];
}
