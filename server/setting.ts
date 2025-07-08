type SettingResource = {
  [key: string]: string;
  setting_sheet_name: string;
  template_sheet_name: string;
};
/**
 * 設定値
 *
 * @types {SettingResource}
 */
let SettingValues = null;

/**
 * 設定値取得
 *
 * @param {keyof SettingResource|undefiend} key
 * @return {Record<string, string>}
 */
function getSettingValues(key = undefined) {
  if (SettingValues === null)
    SettingValues = getSettingSheet()
      .getRange("C:E")
      .getValues()
      .reduce((acc, [key, , value]) => {
        if (key !== "") {
          acc[key] = value;
        }
        return acc;
      }, {});

  if (key) return SettingValues[key];

  return SettingValues;
}
