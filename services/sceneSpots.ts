import axios from "axios";
import jsSHA from "jssha";
import useSWR from "swr";

const instance = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/v2",
  timeout: 1000,
  headers: getAuthorizationHeader(),
});

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = process.env.TDC_APP_ID;
  let AppKey = process.env.TDC_APP_KEY;
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toUTCString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey ? AppKey : "", "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}

const fetcher = (url: string) => instance.get(url).then((res) => res.data);

// const fetcher = instance.get("Rail/TRA/Station?$top=10&$format=JSON");

export function useSceneSpots() {
  const { data, error } = useSWR(
    `Rail/TRA/Station?$top=10&$format=JSON`,
    fetcher
  );

  return {
    spots: data,
    isLoading: !error && !data,
    isError: error,
  };
}
