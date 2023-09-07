import { format } from "date-fns";
import { format as formatTZ } from "date-fns-tz";
import { utcToZonedTime } from "date-fns-tz";

export default function Test() {
  const date = new Date(2023, 10, 2, 12, 30, 20, 0);

  //   const isoString = date.toISOString();

  const test = utcToZonedTime(date, "America/Chicago");

  const datePart = format(test, "EEE, MMM do, yyyy");

  const hourPart = formatTZ(test, "HH:mm:ss zzz", {
    timeZone: "America/Chicago",
  });

  return (
    <div>
      {datePart} {hourPart}
    </div>
  );
}
