var startDate = new Date("Aug 1, 2022 08:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
var lapsed = now-startDate;

var weeks = Math.floor((lapsed / (1000 * 60 * 60 * 24)) / 7 );
var days = Math.floor(lapsed / (1000 * 60 * 60 * 24));
var hours = Math.floor((lapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((lapsed % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((lapsed % (1000 * 60)) / 1000);

document.getElementById("daysinemployment").innerHTML = "Time in service: "+days+"days "+hours+"h "+minutes+"m "+seconds+"s ("+weeks+" weeks)";

if(lapsed<0){
  document.getElementById("daysinemployment").innerHTML="Error";
  clearInterval(x);
}

},1000);

function toggle(e) {
  var el = document.getElementById(e);
  if (el.style.display!='none') {
    el.style.display='none'
  }
  else {
    el.style.display='';
  }
}

function onload() {

var header = document.getElementById("header");
var s="";
s+="<div class='navbar'>";
s+="  <a href='home.htm'>HOME</a>";
s+="  <div class='subnav'>";
s+="    <button class='subnavbtn'>EWR <i class='fa fa-caret-down'></i></button>";
s+="    <div class='subnav-content'>";
s+="      <div class='subsubnav'>";
s+="        <button class='subsubnavbtn'>DOCUMENTS <i class='fa fa-caret-down'></i></button>";
s+="          <div class='subsubnav-content'>";
s+="            <a href='https://eastwestrailwaycouk.sharepoint.com/:x:/s/DigitalEngineeringTeam/EW2bgGRdPShEoasWNQKKumUBZLuZXuTSiovVkjv2UggRLw?e=4%3apsAdYa&at=9' target='_blank' >Team Capabilities Doc</a>";
s+="            <a href='https://eastwestrailwaycouk.sharepoint.com/:x:/r/sites/DigitalEngineeringTeam/Shared%20Documents/General/DE%20Team%20Actions%20and%20Priorities.xlsx?d=w8038f8f958c3430f992291abbd8d5df1&csf=1&web=1&e=WSeFpv' target='_blank' >DE Team Actions</a>";
s+="            <a href='https://eastwestrailwaycouk.sharepoint.com/:x:/s/ITTeam/EfZQR3m8wgFEjhDXG38AOLoBGX3nbpE3NPSJdn-00u5yLw?e=Vk0vjN' target='_blank' title='Information Asset Owners'>IAOs - IT Systems Catalog</a>";
s+="            <a href='https://eastwestrailwaycouk.sharepoint.com/:x:/r/sites/DigitalEngineeringTeam/Shared%20Documents/Procurement/CDE%20Spatial%20Data%20Capability%20Matrix.xlsx?d=w973b601723a7475a82ba5c5006a79074&csf=1&web=1&e=z15r05'> CDE Geospatial Capability Matrix</a>";
s+="            <a href='ms-word://ofe|u|file://C://Users//MikeHarley//OneDrive - East West Railway Company//Documents//website//DT Framework RFQ Statement of Requirements V1.0.docx'>DT Framework RFQ Statement of Requirements</a>";
s+="            <a href='ms-powerpoint://ofe|u|file://C://Users//MikeHarley//OneDrive - East West Railway Company//Documents//website//Digital Twin Maturity V2.0.pptx'>Digital Twin Maturity</a>";
s+="            <a href='ms-powerpoint://ofe|u|file://C://Users//MikeHarley//OneDrive - East West Railway Company//Documents//website//Core IT Training for Partners New Internal .pptx'>Core IT Training for Partners New Internal</a>";
s+="          </div>";
s+="      </div>";

s+="      <div class='subsubnav'>";
s+="        <button class='subsubnavbtn'>EWR LINKS <i class='fa fa-caret-down'></i></button>";
s+="          <div class='subsubnav-content'>";
s+="            <a href='https://app.mitigatehub.com/' target='_blank'>mitigate hub (Training)</a>";
s+="            <a href='https://eastwestrailwaycouk.sharepoint.com/SitePages/Home.aspx' target='_blank'>Connect</a>";
s+="            <a href='https://www.office.com/?auth=2' target='_blank'>Office 365</a>";
s+="            <a href='https://eastwestrail.perkbox.com/home?utm_campaign=Introduce%20products_01082022&utm_source=braze&utm_medium=email&utm_type=commercial&utm_market=uk&utm_product=deals&utm_content=tenant_home&utm_message_type=onboarding' target='_blank' >PerkBox</a>";
s+="            <a href='https://app.powerbi.com/home' target='_blank' >Power BI</a>";
s+="            <a href='https://eastwestrailwaycouk.sharepoint.com/sites/connect/OperatingModel/SitePages/Professional-Homes.aspx' target='_blank'>Prof Homes Hub</a>";
s+="          </div>";
s+="      </div>";

s+="      <div class='subsubnav'>";
s+="        <button class='subsubnavbtn'>Royal Haskoning <i class='fa fa-caret-down'></i></button>";
s+="          <div class='subsubnav-content'>";
s+="            <a href='C:\Users\MikeHarley\East West Railway Company\Digital Twin Roadmap Project - Documents\General\DT Roadmap P3\Sprints\01 - Use Case Catalogue' target='_blank'>Sprint 1</a>";
s+="            <a href='' target='_blank'>Sprint 2</a>";
s+="            <a href='' target='_blank'>Sprint 3</a>";
s+="            <a href='' target='_blank'>Sprint 4</a>";
s+="          </div>";
s+="      </div>";

s+="      <div class='subsubnav' >";
s+="        <button class='subsubnavbtn' style='cursor:hand;' onclick=\"window.location='IFC.htm?bread=home'\">IFC <i class='fa fa-caret-down'></i></button>";
s+="          <div class='subsubnav-content'>";
s+="            <a href='https://www.buildingsmart.org/standards/rooms/railway/ifc-rail-project-phase-1/' target='_blank'>IFC Rail Project</a>";
s+="            <a href='http://ifc-rail.knowsitall.info/' target='_blank'>IFC Rail Candidate Standard</a>";
s+="          </div>";
s+="      </div>";

s+="      <div class='subsubnav'>";
s+="        <button class='subsubnavbtn'>BIM-CDE <i class='fa fa-caret-down'></i></button>";
s+="          <div class='subsubnav-content'>";
s+="            <a href='https://cde.eastwestrail.co.uk/ws/ux/infopage/BIM' Title='Building Information Modelling' target='_blank'>PROD</a>";
s+="            <a href='https://ewrtest.datb.net/ewruat2330180/' target='_blank'>DEV</a>";
s+="            <a href='https://construction.autodesk.co.uk' target='_blank'>ACC Construction Cloud</a>";
s+="          </div>";
s+="      </div>";

//s+="      <div class='subsubnav'>";
//s+="        <button class='subsubnavbtn' onclick=\"window.location='glossary.htm'\">GLOSSARY <i class='fa fa-caret-down'></i></button>";
//s+="      </div>";

s+="      <a href='BIM.htm?bread=home'>BIM</a>";
s+="      <a href='AIMS.htm?bread=home'>AIMS</a>";
s+="      <a href='HS2.htm?bread=home'>HS2</a>";
s+="      <a href='glossary.htm?bread=home'>GLOSSARY</a>";

s+="    </div>";
s+="  </div>";

s+="  <div class='subnav'>";
s+="    <button class='subnavbtn'>LINKS <i class='fa fa-caret-down'></i></button>";
s+="    <div class='subnav-content'>";
s+="      <div class='subsubnav'>";
s+="        <button class='subsubnavbtn'>HOME <i class='fa fa-caret-down'></i></button>";
s+="          <div class='subsubnav-content'>";
s+="            <a href='http://192.168.1.11' target='_blank'>Volumio</a>";
s+="            <a href='http://192.168.1.13/admin' target='_blank'>pi hole</a>";
s+="            <a href='ms-excel://ofe|u|file://C://Users//MikeHarley//OneDrive - East West Railway Company//Daily Log.xlsx' title='Daily Log' target='_blank'>Daily Log</a>";
s+="            <a href='https://docs.microsoft.com/en-us/learn/' target='_blank'>MS Learn</a>";
s+="          </div>";
s+="      </div>";
s+="    <a href='https://www.mottmac.com/' target='_blank' title='Joint Technical Partner'>Mott MacDonald</a>"
s+="    <a href='https://www.wsp.com/en-gb/' target='_blank' title='Joint Technical Partner'>WSP</a>"
s+="    <a href='https://airtable.com/' target='_blank' title='AirTable'>AirTable</a>"
s+="    <a href='ms-word://ofe|u|file://C://Users//MikeHarley//East West Railway Company//Digital Engineering Team - General//1-2-1&apos;s//Mike - Dino 1-2-1&apos;s.docx' target='_blank' title='1-2-1'>Mike 1-2-1</a>"
s+="    <a href='WeeklyUpdate.htm' target='_blank' title='Weekly Updates'>Weekly Updates</a>"
s+="    <a href='SCH.htm' target='_blank' title='System Classification Hierarchy'>SCH</a>"
s+="    </div>";
s+="  </div>";

s+="  <div class='search-container'>";
s+="    <form action='http://www.google.co.uk/search' target='_blank' name=f>";
s+="      <input name=hl type=hidden value=en>";
s+="      <input name=source type=hidden value=hp>";
s+="      <input type='text' id='q' style='padding:0;height:32px;' placeholder='Google Search..' autocomplete='off' maxlength=2048 name=q size=25 title='Google Search' value=''>";
s+="      <button type='submit' style='height:32px;' value='Google Search'><i class='fa fa-search'></i></button>";
s+="    </form>";
s+="  </div>";
s+="</div>";


header.innerHTML = s;
}