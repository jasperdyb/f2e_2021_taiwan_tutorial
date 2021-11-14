import { Interface } from "readline";

export const CityList = [
  { title: "臺北市", value: "Taipei" },
  { title: "新北市", value: "NewTaipei" },
  { title: "桃園市", value: "Taoyuan" },
  { title: "臺中市", value: "Taichung" },
  { title: "臺南市", value: "Tainan" },
  { title: "高雄市", value: "Kaohsiung" },
  { title: "基隆市", value: "Keelung" },
  { title: "新竹市", value: "Hsinchu" },
  { title: "新竹縣", value: "HsinchuCounty" },
  { title: "苗栗縣", value: "MiaoliCounty" },
  { title: "彰化縣", value: "ChanghuaCounty" },
  { title: "南投縣", value: "NantouCounty" },
  { title: "雲林縣", value: "YunlinCounty" },
  { title: "嘉義縣", value: "ChiayiCounty" },
  { title: "嘉義市", value: "Chiayi" },
  { title: "屏東縣", value: "PingtungCounty" },
  { title: "宜蘭縣", value: "YilanCounty" },
  { title: "花蓮縣", value: "HualienCounty" },
  { title: "臺東縣", value: "TaitungCounty" },
  { title: "金門縣", value: "KinmenCounty" },
  { title: "澎湖縣", value: "PenghuCounty" },
  { title: "連江縣", value: "LienchiangCounty" },
];

export interface SceneSpotDataType {
  ID: String; //
  Name: String; // optional
  DescriptionDetail: String; // optional
  Description: String; // optional
  Phone: String; // optional
  Address: String; // optional
  ZipCode: String; // optional
  TravelInfo: String; // optional
  OpenTime: String; // optional
  Picture: TourismPicture; // optional
  MapUrl: String; // optional
  Position: PointType; // optional
  Class1: String; // optional
  Class2: String; // optional
  Class3: String; // optional
  Level: String; // optional
  WebsiteUrl: String; // optional
  ParkingInfo: String; // optional
  ParkingPosition: PointType; // optional
  TicketInfo: String; // optional
  Remarks: String; // optional
  Keyword: String; // optional
  City: String; // optional
  SrcUpdateTime: Date; //
  UpdateTime: Date; //
}

interface TourismPicture {
  PictureUrl1: String; //, optional): // 照片連結網址1 ,
  PictureDescription1: String; //, optional): // 照片說明1 ,
  PictureUrl2: String; //, optional): // 照片連結網址2 ,
  PictureDescription2: String; //, optional): // 照片說明2 ,
  PictureUrl3: String; //, optional): // 照片連結網址3 ,
  PictureDescription3: String; //, optional): // 照片說明3
}

interface PointType {
  PositionLon: number; //, optional): 位置經度(WGS84) ,
  PositionLat: number; //, optional): 位置緯度(WGS84) ,
  GeoHash: String; //, optional): 地理空間編碼
}
