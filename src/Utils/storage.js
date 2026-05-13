const STORAGE_KEY = "installedApps";

export const getInstalledApps = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
};

export const saveApp = (app) => {
  const installed = getInstalledApps();

  const updatedList = [...installed, app];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  return { success: true, message: "Installed Successfully!" };
};

export const removeApp = (id) => {
  const installed = getInstalledApps();
  const updated = installed.filter((a) => a.id != id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
