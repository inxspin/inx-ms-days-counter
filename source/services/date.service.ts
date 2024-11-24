import DatesInputFormatInterface from '../interfaces/datesInputFormatInterface';
interface MonthDaysMapperInterface from '../interfaces/monthDaysMapperInterface'
const MONTH_DAYS_MAPPER: MonthDaysMapperInterface = { "1": 31, "2": 28, "3": 31, "4": 30, "5": 31, "6": 30, "7": 31, "8": 31, "9": 30, "10": 31, "11": 30, "12": 31 };

const get_days_within_date_range = async (data: DatesInputFormatInterface) => {
  try {
    const {startDate, endDate, includeStartDate, includeEndDate} = data;
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
    for(let year=startDateYear; year<=endDateYear; year++){
      for(let month=startDateMonth; month<=12; month++){
        let total_days = 0;
        let num_of_days_in_month = Number(MONTH_DAYS_MAPPER[String(month) as keyof MonthDaysMapperInterface]);
        if(stardDateFirstMonth){
          stardDateFirstMonth = false;
          total_days = num_of_days_in_month - startDateDay + 1;
        }else{
          total_days = num_of_days_in_month;
        }
        if(month == endDateMonth){
          if(year == endDateYear){
            total_days = endDateDay;
          }else{
            total_days = num_of_days_in_month;
          }
        }
        final_total_days = final_total_days + total_days;
        if(month==endDateMonth && year == endDateYear){
          break;
        }
      }
    }
    if(includeStartDate != "yes"){
      final_total_days = final_total_days - 1;
    }
    if(includeEndDate != "yes"){
      final_total_days = final_total_days - 1;
    }
    return {code: 200, status: "success", final_total_days: final_total_days, message: "success"}
  }catch(e: any){
    return {code: 422, status: "failed", message: e.message};
  }
};

export default {get_days_within_date_range};
