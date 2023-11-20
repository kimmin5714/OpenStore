package com.ssafy.api;

import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class xmlParsingTest {

	public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException {
		//페이지 생략
		try {
			String url = "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade?serviceKey=FiSaCyisp9uoy3Xfx1HwkMHRylhKATGXasyTcGc2yGV6d6LhZHP9CrstpxX0R5E3Xu%2F6u8WwFfkJeTl2r1UFvw%3D%3D&LAWD_CD=11110&DEAL_YMD=201512";

			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();		
			Document doc = dBuilder.parse(url);

			doc.getDocumentElement().normalize();

			NodeList nList = doc.getElementsByTagName("item");

			for(int tmp=0;tmp<nList.getLength();tmp++) {
				Node nNode = nList.item(tmp);
				if(nNode.getNodeType() == Node.ELEMENT_NODE) {
					Element eElement = (Element) nNode;
					
					System.out.println("------------------");
					System.out.println("시군구 : "+getTagValue("시군구",eElement));
					System.out.println("법정동 : "+getTagValue("법정동",eElement));
					
					System.out.println("거래금액 : "+getTagValue("거래금액",eElement));
					System.out.println("대지면적 : "+getTagValue("대지면적",eElement));
				
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static String getTagValue(String string, Element eElement) {
		NodeList nList = eElement.getElementsByTagName(string).item(0).getChildNodes();
		
		Node nValue = (Node)nList.item(0);
		if(nValue == null)
			return null;
		return nValue.getNodeValue();
	}
}
