package com.ssafy.commerce.model;

public class SalesDto {
	private String year_month;
	private String busi_area_div_code;
	private String busi_area_div_code_name;
	private String busi_area_code;
	private String busi_area_code_name;
	private String service_code;
	private String service_code_name;
	private String month_sales;
	private String month_sales_count;
	private String x_pos;
	private String y_pos;
	private String gugun_code;
	private String gugun_name;
	private String dong_code;
	private String dong_name;
	private String area;
	public String getYear_month() {
		return year_month;
	}
	public void setYear_month(String year_month) {
		this.year_month = year_month;
	}
	public String getBusi_area_div_code() {
		return busi_area_div_code;
	}
	public void setBusi_area_div_code(String busi_area_div_code) {
		this.busi_area_div_code = busi_area_div_code;
	}
	public String getBusi_area_div_code_name() {
		return busi_area_div_code_name;
	}
	public void setBusi_area_div_code_name(String busi_area_div_code_name) {
		this.busi_area_div_code_name = busi_area_div_code_name;
	}
	public String getBusi_area_code() {
		return busi_area_code;
	}
	public void setBusi_area_code(String busi_area_code) {
		this.busi_area_code = busi_area_code;
	}
	public String getBusi_area_code_name() {
		return busi_area_code_name;
	}
	public void setBusi_area_code_name(String busi_area_code_name) {
		this.busi_area_code_name = busi_area_code_name;
	}
	public String getService_code() {
		return service_code;
	}
	public void setService_code(String service_code) {
		this.service_code = service_code;
	}
	public String getService_code_name() {
		return service_code_name;
	}
	public void setService_code_name(String service_code_name) {
		this.service_code_name = service_code_name;
	}
	public String getMonth_sales() {
		return month_sales;
	}
	public void setMonth_sales(String month_sales) {
		this.month_sales = month_sales;
	}
	public String getMonth_sales_count() {
		return month_sales_count;
	}
	public void setMonth_sales_count(String month_sales_count) {
		this.month_sales_count = month_sales_count;
	}
	public String getX_pos() {
		return x_pos;
	}
	public void setX_pos(String x_pos) {
		this.x_pos = x_pos;
	}
	public String getY_pos() {
		return y_pos;
	}
	public void setY_pos(String y_pos) {
		this.y_pos = y_pos;
	}
	public String getGugun_code() {
		return gugun_code;
	}
	public void setGugun_code(String gugun_code) {
		this.gugun_code = gugun_code;
	}
	public String getGugun_name() {
		return gugun_name;
	}
	public void setGugun_name(String gugun_name) {
		this.gugun_name = gugun_name;
	}
	public String getDong_code() {
		return dong_code;
	}
	public void setDong_code(String dong_code) {
		this.dong_code = dong_code;
	}
	public String getDong_name() {
		return dong_name;
	}
	public void setDong_name(String dong_name) {
		this.dong_name = dong_name;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	@Override
	public String toString() {
		return "salesDto [year_month=" + year_month + ", busi_area_div_code=" + busi_area_div_code
				+ ", busi_area_div_code_name=" + busi_area_div_code_name + ", busi_area_code=" + busi_area_code
				+ ", busi_area_code_name=" + busi_area_code_name + ", service_code=" + service_code
				+ ", service_code_name=" + service_code_name + ", month_sales=" + month_sales + ", month_sales_count="
				+ month_sales_count + ", x_pos=" + x_pos + ", y_pos=" + y_pos + ", gugun_code=" + gugun_code
				+ ", gugun_name=" + gugun_name + ", dong_code=" + dong_code + ", dong_name=" + dong_name + ", area="
				+ area + "]";
	}
}
