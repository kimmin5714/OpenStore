
create table stores (
bizesId varchar(100) primary key,
bizesNm varchar(100),
brchNm varchar(100),
indsLclsCd varchar(100),
indsLclsNm varchar(100),
indsMclsCd varchar(100),
indsMclsNm varchar(100),
indsSclsCd varchar(100),
indsSclsNm varchar(100),
ksicCd varchar(100),
ksicNm varchar(100),
ctprvnCd varchar(100),
ctprvnNm varchar(100),
signguCd varchar(100),
signguNm varchar(100),
adongCd varchar(100),
adongNm varchar(100),
ldongCd varchar(100),
ldongNm varchar(100),
lnoCd varchar(100),
plotSctCd varchar(100),
plotSctNm varchar(100),
lnoMnno varchar(100),
lnoSlno varchar(100),
lnoAdr varchar(100),
rdnmCd varchar(100),
rdnm varchar(100),
bldMnno varchar(100),
bldSlno varchar(100),
bldMngNo varchar(40),
bldNm varchar(100),
rdnmAdr varchar(100),
oldZipcd varchar(100),
newZipcd varchar(100),
dongNo varchar(100),
flrNo varchar(100),
hoNo varchar(100),
lon double,
lat double
);

create table comProp(
id bigint primary key auto_increment,
dealAmount bigint,
buildingArea double,
buildingUse varchar(50),
buildYear varchar(50),
dealYear varchar(50),
plottage double,
dong varchar(50),
sigungu varchar(50),
landUse varchar(50),
dealMonth varchar(50),
buildingType varchar(50),
dealDay varchar(50),
regionalCode varchar(50)
);

desc stores;
desc comProp;

select *
from stores;

select count(bizesId)
from stores;

desc dongcodelatlng;

select dongcode, addressCount, sidoName, gugunName, dongName, lat, lon
from dongcodeLatlng;

select distinct substr(dongCode,1,5)
from dongcodeLatlng;

