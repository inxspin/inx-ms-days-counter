"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
;
const MONTH_DAYS_MAPPER = { "1": 31, "2": 28, "3": 31, "4": 30, "5": 31, "6": 30, "7": 31, "8": 31, "9": 30, "10": 31, "11": 30, "12": 31 };
const get_days_within_date_range = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { startDate, endDate, includeStartDate, includeEndDate } = data;
        const startDateData = startDate.split("-");
        let startDateDay = Number(startDateData[0]);
        let startDateMonth = Number(startDateData[1]);
        let startDateYear = Number(startDateData[2]);
        const endDateData = endDate.split("-");
        let endDateDay = Number(endDateData[0]);
        let endDateMonth = Number(endDateData[1]);
        let endDateYear = Number(endDateData[2]);
        let final_total_days = 0;
        let stardDateFirstMonth = true;
        for (let year = startDateYear; year <= endDateYear; year++) {
            for (let month = startDateMonth; month <= 12; month++) {
                let total_days = 0;
                let num_of_days_in_month = Number(MONTH_DAYS_MAPPER[String(month)]);
                if (stardDateFirstMonth) {
                    stardDateFirstMonth = false;
                    total_days = num_of_days_in_month - startDateDay + 1;
                }
                else {
                    total_days = num_of_days_in_month;
                }
                if (month == endDateMonth) {
                    if (year == endDateYear) {
                        total_days = endDateDay;
                    }
                    else {
                        total_days = num_of_days_in_month;
                    }
                }
                final_total_days = final_total_days + total_days;
                if (month == endDateMonth && year == endDateYear) {
                    break;
                }
            }
        }
        if (includeStartDate != "yes") {
            final_total_days = final_total_days - 1;
        }
        if (includeEndDate != "yes") {
            final_total_days = final_total_days - 1;
        }
        return { code: 200, status: "success", final_total_days: final_total_days, message: "success" };
    }
    catch (e) {
        return { code: 422, status: "failed", message: e.message };
    }
});
exports.default = { get_days_within_date_range };
