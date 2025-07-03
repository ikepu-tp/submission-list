/**
 * Copyright (c) 2025 ikepu-tp All Rights Reserved.
 *
 * 作成者：ikepu-tp
 * お問い合わせ：https://ikepu-tp.com
 * ID: 12FVym0EOZz2Tj9cPxs2UBFNrs_b7RmM0xg7q1A_r6pIZqdmnoeGazfhV
 */

/** @type {GoogleAppsScript.Spreadsheet.Spreadsheet} */
let SS =
  SpreadsheetApp.getActiveSpreadsheet() ||
  SpreadsheetApp.openById("1qx29BqjCOYgaL4xe4PiTz4-Nc-6BxdnQRsxS3OACBP0");

/**
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} ss
 * @returns void
 */
function setSS(ss) {
  SS = ss;
}

function showLicense() {
  License.showLicenseModal();
}

/**
 * @return {GoogleAppsScript.Spreadsheet.Sheet}
 */
function getSettingSheet() {
  return SS.getSheetById(0);
}
