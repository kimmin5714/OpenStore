package com.ssafy.api.model;

public class ComPropDto {
	private int dealAmount;
	private double buildingArea;
	private String buildingUse;
	private String buildYear;
	private String ClassificationOfShareDealing;
	private String dealYear;
	private int plottage;
	private String dong;
	private String sigungu;
	private String landUse;
	private String dealMonth;
	private String buildingType;
	private String dealDay;
	private String regionalCode;
	private int floor;
	public int getDealAmount() {
		return dealAmount;
	}
	public void setDealAmount(int dealAmount) {
		this.dealAmount = dealAmount;
	}
	public double getBuildingArea() {
		return buildingArea;
	}
	public void setBuildingArea(double buildingArea) {
		this.buildingArea = buildingArea;
	}
	public String getBuildingUse() {
		return buildingUse;
	}
	public void setBuildingUse(String buildingUse) {
		this.buildingUse = buildingUse;
	}
	public String getBuildYear() {
		return buildYear;
	}
	public void setBuildYear(String buildYear) {
		this.buildYear = buildYear;
	}
	public String getClassificationOfShareDealing() {
		return ClassificationOfShareDealing;
	}
	public void setClassificationOfShareDealing(String classificationOfShareDealing) {
		ClassificationOfShareDealing = classificationOfShareDealing;
	}
	public String getDealYear() {
		return dealYear;
	}
	public void setDealYear(String dealYear) {
		this.dealYear = dealYear;
	}
	public int getPlottage() {
		return plottage;
	}
	public void setPlottage(int plottage) {
		this.plottage = plottage;
	}
	public String getDong() {
		return dong;
	}
	public void setDong(String dong) {
		this.dong = dong;
	}
	public String getSigungu() {
		return sigungu;
	}
	public void setSigungu(String sigungu) {
		this.sigungu = sigungu;
	}
	public String getLandUse() {
		return landUse;
	}
	public void setLandUse(String landUse) {
		this.landUse = landUse;
	}
	public String getDealMonth() {
		return dealMonth;
	}
	public void setDealMonth(String dealMonth) {
		this.dealMonth = dealMonth;
	}
	public String getBuildingType() {
		return buildingType;
	}
	public void setBuildingType(String buildingType) {
		this.buildingType = buildingType;
	}
	public String getDealDay() {
		return dealDay;
	}
	public void setDealDay(String dealDay) {
		this.dealDay = dealDay;
	}
	public String getRegionalCode() {
		return regionalCode;
	}
	public void setRegionalCode(String regionalCode) {
		this.regionalCode = regionalCode;
	}
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	@Override
	public String toString() {
		return "ComPropDto [dealAmount=" + dealAmount + ", buildingArea=" + buildingArea + ", buildingUse="
				+ buildingUse + ", buildYear=" + buildYear + ", ClassificationOfShareDealing="
				+ ClassificationOfShareDealing + ", dealYear=" + dealYear + ", plottage=" + plottage + ", dong=" + dong
				+ ", sigungu=" + sigungu + ", landUse=" + landUse + ", dealMonth=" + dealMonth + ", buildingType="
				+ buildingType + ", dealDay=" + dealDay + ", regionalCode=" + regionalCode + ", floor=" + floor + "]";
	}
}
