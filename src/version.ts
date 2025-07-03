Version.setNewVersion("v1.0.0");
Version.setIsCheckingUpdate(getSettingSheet().getRange("A4").getValue());

function checkUpdate() {
  const currentVersion = SS.getSheetById(0).getRange("A2").getValue();
  Version.checkUpdate(currentVersion);
}

function addTrigger() {
  const trigger = Version.addTriggerForSpreadsheet(SS);
  if (!trigger) return;
  getSettingSheet().getRange("A6").setValue(trigger.getUniqueId());
}
