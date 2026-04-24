gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.forEachIndex3 = 0;

gdjs.menuCode.forEachIndex4 = 0;

gdjs.menuCode.forEachIndex5 = 0;

gdjs.menuCode.forEachIndex6 = 0;

gdjs.menuCode.forEachIndex7 = 0;

gdjs.menuCode.forEachObjects3 = [];

gdjs.menuCode.forEachObjects4 = [];

gdjs.menuCode.forEachObjects5 = [];

gdjs.menuCode.forEachObjects6 = [];

gdjs.menuCode.forEachObjects7 = [];

gdjs.menuCode.forEachTemporary3 = null;

gdjs.menuCode.forEachTemporary4 = null;

gdjs.menuCode.forEachTemporary5 = null;

gdjs.menuCode.forEachTemporary6 = null;

gdjs.menuCode.forEachTemporary7 = null;

gdjs.menuCode.forEachTotalCount3 = 0;

gdjs.menuCode.forEachTotalCount4 = 0;

gdjs.menuCode.forEachTotalCount5 = 0;

gdjs.menuCode.forEachTotalCount6 = 0;

gdjs.menuCode.forEachTotalCount7 = 0;

gdjs.menuCode.GDcadreObjects1= [];
gdjs.menuCode.GDcadreObjects2= [];
gdjs.menuCode.GDcadreObjects3= [];
gdjs.menuCode.GDcadreObjects4= [];
gdjs.menuCode.GDcadreObjects5= [];
gdjs.menuCode.GDcadreObjects6= [];
gdjs.menuCode.GDcadreObjects7= [];
gdjs.menuCode.GDtexteObjects1= [];
gdjs.menuCode.GDtexteObjects2= [];
gdjs.menuCode.GDtexteObjects3= [];
gdjs.menuCode.GDtexteObjects4= [];
gdjs.menuCode.GDtexteObjects5= [];
gdjs.menuCode.GDtexteObjects6= [];
gdjs.menuCode.GDtexteObjects7= [];
gdjs.menuCode.GDiconObjects1= [];
gdjs.menuCode.GDiconObjects2= [];
gdjs.menuCode.GDiconObjects3= [];
gdjs.menuCode.GDiconObjects4= [];
gdjs.menuCode.GDiconObjects5= [];
gdjs.menuCode.GDiconObjects6= [];
gdjs.menuCode.GDiconObjects7= [];
gdjs.menuCode.GDSwitchObjects1= [];
gdjs.menuCode.GDSwitchObjects2= [];
gdjs.menuCode.GDSwitchObjects3= [];
gdjs.menuCode.GDSwitchObjects4= [];
gdjs.menuCode.GDSwitchObjects5= [];
gdjs.menuCode.GDSwitchObjects6= [];
gdjs.menuCode.GDSwitchObjects7= [];
gdjs.menuCode.GDboutonObjects1= [];
gdjs.menuCode.GDboutonObjects2= [];
gdjs.menuCode.GDboutonObjects3= [];
gdjs.menuCode.GDboutonObjects4= [];
gdjs.menuCode.GDboutonObjects5= [];
gdjs.menuCode.GDboutonObjects6= [];
gdjs.menuCode.GDboutonObjects7= [];
gdjs.menuCode.GDretour_9595menuObjects1= [];
gdjs.menuCode.GDretour_9595menuObjects2= [];
gdjs.menuCode.GDretour_9595menuObjects3= [];
gdjs.menuCode.GDretour_9595menuObjects4= [];
gdjs.menuCode.GDretour_9595menuObjects5= [];
gdjs.menuCode.GDretour_9595menuObjects6= [];
gdjs.menuCode.GDretour_9595menuObjects7= [];
gdjs.menuCode.GDFondObjects1= [];
gdjs.menuCode.GDFondObjects2= [];
gdjs.menuCode.GDFondObjects3= [];
gdjs.menuCode.GDFondObjects4= [];
gdjs.menuCode.GDFondObjects5= [];
gdjs.menuCode.GDFondObjects6= [];
gdjs.menuCode.GDFondObjects7= [];
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDNewTiledSpriteObjects3= [];
gdjs.menuCode.GDNewTiledSpriteObjects4= [];
gdjs.menuCode.GDNewTiledSpriteObjects5= [];
gdjs.menuCode.GDNewTiledSpriteObjects6= [];
gdjs.menuCode.GDNewTiledSpriteObjects7= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cadre"), gdjs.menuCode.GDcadreObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.menuCode.GDcadreObjects1.length !== 0 ? gdjs.menuCode.GDcadreObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.4, "", 0);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "indication");
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "fail-sound-comedy-reaction-309057.mp3", 0, false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("menu");
}
}

}


};gdjs.menuCode.eventsList1 = function(runtimeScene) {

};gdjs.menuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects6);

for (gdjs.menuCode.forEachIndex7 = 0;gdjs.menuCode.forEachIndex7 < gdjs.menuCode.GDiconObjects6.length;++gdjs.menuCode.forEachIndex7) {
gdjs.menuCode.GDiconObjects7.length = 0;


gdjs.menuCode.forEachTemporary7 = gdjs.menuCode.GDiconObjects6[gdjs.menuCode.forEachIndex7];
gdjs.menuCode.GDiconObjects7.push(gdjs.menuCode.forEachTemporary7);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects7.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects7[i].getVariableString(gdjs.menuCode.GDiconObjects7[i].getVariables().getFromIndex(0)) == "son" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects7[k] = gdjs.menuCode.GDiconObjects7[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects7.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
}
}

}


};gdjs.menuCode.eventsList3 = function(runtimeScene) {

};gdjs.menuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects6);

for (gdjs.menuCode.forEachIndex7 = 0;gdjs.menuCode.forEachIndex7 < gdjs.menuCode.GDiconObjects6.length;++gdjs.menuCode.forEachIndex7) {
gdjs.menuCode.GDiconObjects7.length = 0;


gdjs.menuCode.forEachTemporary7 = gdjs.menuCode.GDiconObjects6[gdjs.menuCode.forEachIndex7];
gdjs.menuCode.GDiconObjects7.push(gdjs.menuCode.forEachTemporary7);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects7.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects7[i].getVariableString(gdjs.menuCode.GDiconObjects7[i].getVariables().getFromIndex(0)) == "son" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects7[k] = gdjs.menuCode.GDiconObjects7[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects7.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}
}
}

}


};gdjs.menuCode.eventsList5 = function(runtimeScene) {

};gdjs.menuCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects6);

for (gdjs.menuCode.forEachIndex7 = 0;gdjs.menuCode.forEachIndex7 < gdjs.menuCode.GDiconObjects6.length;++gdjs.menuCode.forEachIndex7) {
gdjs.menuCode.GDiconObjects7.length = 0;


gdjs.menuCode.forEachTemporary7 = gdjs.menuCode.GDiconObjects6[gdjs.menuCode.forEachIndex7];
gdjs.menuCode.GDiconObjects7.push(gdjs.menuCode.forEachTemporary7);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects7.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects7[i].getVariableString(gdjs.menuCode.GDiconObjects7[i].getVariables().getFromIndex(0)) == "son" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects7[k] = gdjs.menuCode.GDiconObjects7[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects7.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDiconObjects7.length ;i < len;++i) {
    gdjs.menuCode.GDiconObjects7[i].getBehavior("Animation").setAnimationName("son _on");
}
}
}
}

}


};gdjs.menuCode.eventsList7 = function(runtimeScene) {

};gdjs.menuCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects6);

for (gdjs.menuCode.forEachIndex7 = 0;gdjs.menuCode.forEachIndex7 < gdjs.menuCode.GDiconObjects6.length;++gdjs.menuCode.forEachIndex7) {
gdjs.menuCode.GDiconObjects7.length = 0;


gdjs.menuCode.forEachTemporary7 = gdjs.menuCode.GDiconObjects6[gdjs.menuCode.forEachIndex7];
gdjs.menuCode.GDiconObjects7.push(gdjs.menuCode.forEachTemporary7);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects7.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects7[i].getVariableString(gdjs.menuCode.GDiconObjects7[i].getVariables().getFromIndex(0)) == "son" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects7[k] = gdjs.menuCode.GDiconObjects7[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects7.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDiconObjects7.length ;i < len;++i) {
    gdjs.menuCode.GDiconObjects7[i].getBehavior("Animation").setAnimationName("son_off");
}
}
}
}

}


};gdjs.menuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDSwitchObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDSwitchObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDSwitchObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDSwitchObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].HasJustBeenChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].getVariableString(gdjs.menuCode.GDSwitchObjects5[i].getVariables().getFromIndex(0)) == "son" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.menuCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDSwitchObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDSwitchObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDSwitchObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDSwitchObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].HasJustBeenUnchecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].getVariableString(gdjs.menuCode.GDSwitchObjects5[i].getVariables().getFromIndex(0)) == "son" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.menuCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDSwitchObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDSwitchObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDSwitchObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDSwitchObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].getVariableString(gdjs.menuCode.GDSwitchObjects5[i].getVariables().getFromIndex(0)) == "son" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDSwitchObjects5.length ;i < len;++i) {
    gdjs.menuCode.GDSwitchObjects5[i].SetChecked(true, null);
}
}

{ //Subevents: 
gdjs.menuCode.eventsList6(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDSwitchObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDSwitchObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDSwitchObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDSwitchObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].getVariableString(gdjs.menuCode.GDSwitchObjects5[i].getVariables().getFromIndex(0)) == "son" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDSwitchObjects5.length ;i < len;++i) {
    gdjs.menuCode.GDSwitchObjects5[i].SetChecked(false, null);
}
}

{ //Subevents: 
gdjs.menuCode.eventsList8(runtimeScene);} //Subevents end.
}
}

}


};gdjs.menuCode.eventsList10 = function(runtimeScene) {

};gdjs.menuCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects6);

for (gdjs.menuCode.forEachIndex7 = 0;gdjs.menuCode.forEachIndex7 < gdjs.menuCode.GDiconObjects6.length;++gdjs.menuCode.forEachIndex7) {
gdjs.menuCode.GDiconObjects7.length = 0;


gdjs.menuCode.forEachTemporary7 = gdjs.menuCode.GDiconObjects6[gdjs.menuCode.forEachIndex7];
gdjs.menuCode.GDiconObjects7.push(gdjs.menuCode.forEachTemporary7);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects7.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects7[i].getVariableString(gdjs.menuCode.GDiconObjects7[i].getVariables().getFromIndex(0)) == "musique" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects7[k] = gdjs.menuCode.GDiconObjects7[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects7.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}
}
}

}


};gdjs.menuCode.eventsList12 = function(runtimeScene) {

};gdjs.menuCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects6);

for (gdjs.menuCode.forEachIndex7 = 0;gdjs.menuCode.forEachIndex7 < gdjs.menuCode.GDiconObjects6.length;++gdjs.menuCode.forEachIndex7) {
gdjs.menuCode.GDiconObjects7.length = 0;


gdjs.menuCode.forEachTemporary7 = gdjs.menuCode.GDiconObjects6[gdjs.menuCode.forEachIndex7];
gdjs.menuCode.GDiconObjects7.push(gdjs.menuCode.forEachTemporary7);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects7.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects7[i].getVariableString(gdjs.menuCode.GDiconObjects7[i].getVariables().getFromIndex(0)) == "musique" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects7[k] = gdjs.menuCode.GDiconObjects7[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects7.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}
}
}

}


};gdjs.menuCode.eventsList14 = function(runtimeScene) {

};gdjs.menuCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects6);

for (gdjs.menuCode.forEachIndex7 = 0;gdjs.menuCode.forEachIndex7 < gdjs.menuCode.GDiconObjects6.length;++gdjs.menuCode.forEachIndex7) {
gdjs.menuCode.GDiconObjects7.length = 0;


gdjs.menuCode.forEachTemporary7 = gdjs.menuCode.GDiconObjects6[gdjs.menuCode.forEachIndex7];
gdjs.menuCode.GDiconObjects7.push(gdjs.menuCode.forEachTemporary7);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects7.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects7[i].getVariableString(gdjs.menuCode.GDiconObjects7[i].getVariables().getFromIndex(0)) == "musique" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects7[k] = gdjs.menuCode.GDiconObjects7[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects7.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDiconObjects7.length ;i < len;++i) {
    gdjs.menuCode.GDiconObjects7[i].getBehavior("Animation").setAnimationName("musique_on");
}
}
}
}

}


};gdjs.menuCode.eventsList16 = function(runtimeScene) {

};gdjs.menuCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects5);

for (gdjs.menuCode.forEachIndex6 = 0;gdjs.menuCode.forEachIndex6 < gdjs.menuCode.GDiconObjects5.length;++gdjs.menuCode.forEachIndex6) {
gdjs.menuCode.GDiconObjects6.length = 0;


gdjs.menuCode.forEachTemporary6 = gdjs.menuCode.GDiconObjects5[gdjs.menuCode.forEachIndex6];
gdjs.menuCode.GDiconObjects6.push(gdjs.menuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects6.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects6[i].getVariableString(gdjs.menuCode.GDiconObjects6[i].getVariables().getFromIndex(0)) == "musique" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects6[k] = gdjs.menuCode.GDiconObjects6[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects6.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDiconObjects6.length ;i < len;++i) {
    gdjs.menuCode.GDiconObjects6[i].getBehavior("Animation").setAnimationName("musique_off");
}
}
}
}

}


};gdjs.menuCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDSwitchObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDSwitchObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDSwitchObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDSwitchObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].HasJustBeenChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].getVariableString(gdjs.menuCode.GDSwitchObjects5[i].getVariables().getFromIndex(0)) == "musique" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.menuCode.eventsList11(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDSwitchObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDSwitchObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDSwitchObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDSwitchObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].HasJustBeenUnchecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].getVariableString(gdjs.menuCode.GDSwitchObjects5[i].getVariables().getFromIndex(0)) == "musique" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.menuCode.eventsList13(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDSwitchObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDSwitchObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDSwitchObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDSwitchObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects5[i].getVariableString(gdjs.menuCode.GDSwitchObjects5[i].getVariables().getFromIndex(0)) == "musique" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects5[k] = gdjs.menuCode.GDSwitchObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDSwitchObjects5.length ;i < len;++i) {
    gdjs.menuCode.GDSwitchObjects5[i].SetChecked(true, null);
}
}
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 0);
}

{ //Subevents: 
gdjs.menuCode.eventsList15(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDSwitchObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.menuCode.GDSwitchObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDSwitchObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDSwitchObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects4[i].getVariableString(gdjs.menuCode.GDSwitchObjects4[i].getVariables().getFromIndex(0)) == "musique" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects4[k] = gdjs.menuCode.GDSwitchObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDSwitchObjects4.length ;i < len;++i) {
    gdjs.menuCode.GDSwitchObjects4[i].SetChecked(false, null);
}
}
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 0);
}

{ //Subevents: 
gdjs.menuCode.eventsList17(runtimeScene);} //Subevents end.
}
}

}


};gdjs.menuCode.eventsList19 = function(runtimeScene) {

};gdjs.menuCode.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects5);

for (gdjs.menuCode.forEachIndex6 = 0;gdjs.menuCode.forEachIndex6 < gdjs.menuCode.GDiconObjects5.length;++gdjs.menuCode.forEachIndex6) {
gdjs.menuCode.GDiconObjects6.length = 0;


gdjs.menuCode.forEachTemporary6 = gdjs.menuCode.GDiconObjects5[gdjs.menuCode.forEachIndex6];
gdjs.menuCode.GDiconObjects6.push(gdjs.menuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects6.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects6[i].getVariableString(gdjs.menuCode.GDiconObjects6[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects6[k] = gdjs.menuCode.GDiconObjects6[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects6.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(false);
}
}
}

}


};gdjs.menuCode.eventsList21 = function(runtimeScene) {

};gdjs.menuCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects5);

for (gdjs.menuCode.forEachIndex6 = 0;gdjs.menuCode.forEachIndex6 < gdjs.menuCode.GDiconObjects5.length;++gdjs.menuCode.forEachIndex6) {
gdjs.menuCode.GDiconObjects6.length = 0;


gdjs.menuCode.forEachTemporary6 = gdjs.menuCode.GDiconObjects5[gdjs.menuCode.forEachIndex6];
gdjs.menuCode.GDiconObjects6.push(gdjs.menuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects6.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects6[i].getVariableString(gdjs.menuCode.GDiconObjects6[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects6[k] = gdjs.menuCode.GDiconObjects6[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects6.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
}
}

}


};gdjs.menuCode.eventsList23 = function(runtimeScene) {

};gdjs.menuCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects5);

for (gdjs.menuCode.forEachIndex6 = 0;gdjs.menuCode.forEachIndex6 < gdjs.menuCode.GDiconObjects5.length;++gdjs.menuCode.forEachIndex6) {
gdjs.menuCode.GDiconObjects6.length = 0;


gdjs.menuCode.forEachTemporary6 = gdjs.menuCode.GDiconObjects5[gdjs.menuCode.forEachIndex6];
gdjs.menuCode.GDiconObjects6.push(gdjs.menuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects6.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects6[i].getVariableString(gdjs.menuCode.GDiconObjects6[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects6[k] = gdjs.menuCode.GDiconObjects6[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects6.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDiconObjects6.length ;i < len;++i) {
    gdjs.menuCode.GDiconObjects6[i].getBehavior("Animation").setAnimationName("curseur_on");
}
}
}
}

}


};gdjs.menuCode.eventsList25 = function(runtimeScene) {

};gdjs.menuCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects5);

for (gdjs.menuCode.forEachIndex6 = 0;gdjs.menuCode.forEachIndex6 < gdjs.menuCode.GDiconObjects5.length;++gdjs.menuCode.forEachIndex6) {
gdjs.menuCode.GDiconObjects6.length = 0;


gdjs.menuCode.forEachTemporary6 = gdjs.menuCode.GDiconObjects5[gdjs.menuCode.forEachIndex6];
gdjs.menuCode.GDiconObjects6.push(gdjs.menuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects6.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects6[i].getVariableString(gdjs.menuCode.GDiconObjects6[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects6[k] = gdjs.menuCode.GDiconObjects6[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects6.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDiconObjects6.length ;i < len;++i) {
    gdjs.menuCode.GDiconObjects6[i].getBehavior("Animation").setAnimationName("curseu_off");
}
}
}
}

}


};gdjs.menuCode.eventsList27 = function(runtimeScene) {

};gdjs.menuCode.eventsList28 = function(runtimeScene) {

};gdjs.menuCode.eventsList29 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.menuCode.GDiconObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDiconObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.menuCode.GDiconObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDiconObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDiconObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDiconObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDiconObjects4[i].getVariableString(gdjs.menuCode.GDiconObjects4[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDiconObjects4[k] = gdjs.menuCode.GDiconObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDiconObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDiconObjects4.length ;i < len;++i) {
    gdjs.menuCode.GDiconObjects4[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects2);

for (gdjs.menuCode.forEachIndex3 = 0;gdjs.menuCode.forEachIndex3 < gdjs.menuCode.GDSwitchObjects2.length;++gdjs.menuCode.forEachIndex3) {
gdjs.menuCode.GDSwitchObjects3.length = 0;


gdjs.menuCode.forEachTemporary3 = gdjs.menuCode.GDSwitchObjects2[gdjs.menuCode.forEachIndex3];
gdjs.menuCode.GDSwitchObjects3.push(gdjs.menuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects3.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects3[i].getVariableString(gdjs.menuCode.GDSwitchObjects3[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects3[k] = gdjs.menuCode.GDSwitchObjects3[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDSwitchObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDSwitchObjects3[i].deleteFromScene(runtimeScene);
}
}
}
}

}


};gdjs.menuCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDSwitchObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.menuCode.GDSwitchObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDSwitchObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDSwitchObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects4[i].HasJustBeenUnchecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects4[k] = gdjs.menuCode.GDSwitchObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects4[i].getVariableString(gdjs.menuCode.GDSwitchObjects4[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects4[k] = gdjs.menuCode.GDSwitchObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.menuCode.eventsList20(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDSwitchObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.menuCode.GDSwitchObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDSwitchObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDSwitchObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects4[i].HasJustBeenChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects4[k] = gdjs.menuCode.GDSwitchObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects4[i].getVariableString(gdjs.menuCode.GDSwitchObjects4[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects4[k] = gdjs.menuCode.GDSwitchObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.menuCode.eventsList22(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDSwitchObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.menuCode.GDSwitchObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDSwitchObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDSwitchObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects4[i].getVariableString(gdjs.menuCode.GDSwitchObjects4[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects4[k] = gdjs.menuCode.GDSwitchObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDSwitchObjects4.length ;i < len;++i) {
    gdjs.menuCode.GDSwitchObjects4[i].SetChecked(true, null);
}
}

{ //Subevents: 
gdjs.menuCode.eventsList24(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDSwitchObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.menuCode.GDSwitchObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDSwitchObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDSwitchObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects4[i].getVariableString(gdjs.menuCode.GDSwitchObjects4[i].getVariables().getFromIndex(0)) == "curseur" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects4[k] = gdjs.menuCode.GDSwitchObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menuCode.GDSwitchObjects4.length ;i < len;++i) {
    gdjs.menuCode.GDSwitchObjects4[i].SetChecked(false, null);
}
}

{ //Subevents: 
gdjs.menuCode.eventsList26(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.menuCode.eventsList31 = function(runtimeScene) {

{


gdjs.menuCode.eventsList9(runtimeScene);
}


{


gdjs.menuCode.eventsList18(runtimeScene);
}


{


gdjs.menuCode.eventsList30(runtimeScene);
}


};gdjs.menuCode.eventsList32 = function(runtimeScene) {

};gdjs.menuCode.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDboutonObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("cadre"), gdjs.menuCode.GDcadreObjects4);
gdjs.menuCode.GDboutonObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDboutonObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDboutonObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects4[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects4[k] = gdjs.menuCode.GDboutonObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects4[i].getVariableString(gdjs.menuCode.GDboutonObjects4[i].getVariables().getFromIndex(0)) == "back" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects4[k] = gdjs.menuCode.GDboutonObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects4.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "jouer", (( gdjs.menuCode.GDcadreObjects4.length === 0 ) ? 0 :gdjs.menuCode.GDcadreObjects4[0].getCenterXInScene()), (( gdjs.menuCode.GDcadreObjects4.length === 0 ) ? 0 :gdjs.menuCode.GDcadreObjects4[0].getCenterYInScene()), "", "easeOutCubic", 1);
}
}
}

}


};gdjs.menuCode.eventsList34 = function(runtimeScene) {

};gdjs.menuCode.eventsList35 = function(runtimeScene) {

};gdjs.menuCode.eventsList36 = function(runtimeScene) {

};gdjs.menuCode.eventsList37 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDboutonObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDboutonObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDboutonObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDboutonObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].getVariableString(gdjs.menuCode.GDboutonObjects5[i].getVariables().getFromIndex(0)) == "connection" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDboutonObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDboutonObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDboutonObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDboutonObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].getVariableString(gdjs.menuCode.GDboutonObjects5[i].getVariables().getFromIndex(0)) == "ranking" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "442dfaff-7d1f-47f2-b30c-bdf07b387a50", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDboutonObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.menuCode.GDboutonObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDboutonObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDboutonObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects4[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects4[k] = gdjs.menuCode.GDboutonObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects4[i].getVariableString(gdjs.menuCode.GDboutonObjects4[i].getVariables().getFromIndex(0)) == "setting" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects4[k] = gdjs.menuCode.GDboutonObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects4.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "jouer", 1421.5, 348, "", "easeOutCubic", 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("reglage");
}
}
}

}


};gdjs.menuCode.eventsList38 = function(runtimeScene) {

};gdjs.menuCode.eventsList39 = function(runtimeScene) {

};gdjs.menuCode.eventsList40 = function(runtimeScene) {

};gdjs.menuCode.eventsList41 = function(runtimeScene) {

};gdjs.menuCode.eventsList42 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDboutonObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDboutonObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDboutonObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDboutonObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].getVariableString(gdjs.menuCode.GDboutonObjects5[i].getVariables().getFromIndex(0)) == "training" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "zone d'essai", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDboutonObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDboutonObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDboutonObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDboutonObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].getVariableString(gdjs.menuCode.GDboutonObjects5[i].getVariables().getFromIndex(0)) == "researche" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "recherche", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects4);

for (gdjs.menuCode.forEachIndex5 = 0;gdjs.menuCode.forEachIndex5 < gdjs.menuCode.GDboutonObjects4.length;++gdjs.menuCode.forEachIndex5) {
gdjs.menuCode.GDboutonObjects5.length = 0;


gdjs.menuCode.forEachTemporary5 = gdjs.menuCode.GDboutonObjects4[gdjs.menuCode.forEachIndex5];
gdjs.menuCode.GDboutonObjects5.push(gdjs.menuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects5.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects5[i].getVariableString(gdjs.menuCode.GDboutonObjects5[i].getVariables().getFromIndex(0)) == "play" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects5[k] = gdjs.menuCode.GDboutonObjects5[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects5.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "jouer", 816, 704, "", "easeOutCubic", 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDboutonObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.menuCode.GDboutonObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDboutonObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDboutonObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects4[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects4[k] = gdjs.menuCode.GDboutonObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects4[i].getVariableString(gdjs.menuCode.GDboutonObjects4[i].getVariables().getFromIndex(0)) == "dodge" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects4[k] = gdjs.menuCode.GDboutonObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects4.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "esquive", false);
}
}
}

}


};gdjs.menuCode.eventsList43 = function(runtimeScene) {

};gdjs.menuCode.eventsList44 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.menuCode.GDSwitchObjects3, gdjs.menuCode.GDSwitchObjects4);

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects4[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects4[k] = gdjs.menuCode.GDSwitchObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDboutonObjects4.length;i<l;++i) {
    if ( gdjs.menuCode.GDboutonObjects4[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDboutonObjects4[k] = gdjs.menuCode.GDboutonObjects4[i];
        ++k;
    }
}
gdjs.menuCode.GDboutonObjects4.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "button-pressed-38129.mp3", 1, false, 25, 1);
}
}

}


};gdjs.menuCode.eventsList45 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bouton"), gdjs.menuCode.GDboutonObjects3);

for (gdjs.menuCode.forEachIndex4 = 0;gdjs.menuCode.forEachIndex4 < gdjs.menuCode.GDboutonObjects3.length;++gdjs.menuCode.forEachIndex4) {
gdjs.menuCode.GDboutonObjects4.length = 0;


gdjs.menuCode.forEachTemporary4 = gdjs.menuCode.GDboutonObjects3[gdjs.menuCode.forEachIndex4];
gdjs.menuCode.GDboutonObjects4.push(gdjs.menuCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.menuCode.GDboutonObjects4.length ;i < len;++i) {
    gdjs.menuCode.GDboutonObjects4[i].SetLabelTextOp(gdjs.menuCode.GDboutonObjects4[i].getVariables().getFromIndex(0).getAsString(), null);
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch"), gdjs.menuCode.GDSwitchObjects2);

for (gdjs.menuCode.forEachIndex3 = 0;gdjs.menuCode.forEachIndex3 < gdjs.menuCode.GDSwitchObjects2.length;++gdjs.menuCode.forEachIndex3) {
gdjs.menuCode.GDSwitchObjects3.length = 0;


gdjs.menuCode.forEachTemporary3 = gdjs.menuCode.GDSwitchObjects2[gdjs.menuCode.forEachIndex3];
gdjs.menuCode.GDSwitchObjects3.push(gdjs.menuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDSwitchObjects3.length;i<l;++i) {
    if ( gdjs.menuCode.GDSwitchObjects3[i].getVariableString(gdjs.menuCode.GDSwitchObjects3[i].getVariables().getFromIndex(0)) == "son" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDSwitchObjects3[k] = gdjs.menuCode.GDSwitchObjects3[i];
        ++k;
    }
}
gdjs.menuCode.GDSwitchObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.menuCode.eventsList44(runtimeScene);} //Subevents end.
}
}

}


};gdjs.menuCode.eventsList46 = function(runtimeScene) {

{


gdjs.menuCode.eventsList33(runtimeScene);
}


{


gdjs.menuCode.eventsList37(runtimeScene);
}


{


gdjs.menuCode.eventsList42(runtimeScene);
}


{


gdjs.menuCode.eventsList45(runtimeScene);
}


};gdjs.menuCode.eventsList47 = function(runtimeScene) {

};gdjs.menuCode.eventsList48 = function(runtimeScene) {

{


gdjs.menuCode.eventsList47(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.menuCode.GDNewTiledSpriteObjects2);
{for(var i = 0, len = gdjs.menuCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDNewTiledSpriteObjects2[i].setXOffset(gdjs.menuCode.GDNewTiledSpriteObjects2[i].getXOffset() + (-(0.2)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.hideLayer(runtimeScene, "invisible");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("texte"), gdjs.menuCode.GDtexteObjects1);
{for(var i = 0, len = gdjs.menuCode.GDtexteObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDtexteObjects1[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}
}

}


};gdjs.menuCode.eventsList49 = function(runtimeScene) {

{


gdjs.menuCode.eventsList31(runtimeScene);
}


{


gdjs.menuCode.eventsList46(runtimeScene);
}


{


gdjs.menuCode.eventsList48(runtimeScene);
}


};gdjs.menuCode.eventsList50 = function(runtimeScene) {

{


gdjs.menuCode.eventsList0(runtimeScene);
}


{


gdjs.menuCode.eventsList49(runtimeScene);
}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDcadreObjects1.length = 0;
gdjs.menuCode.GDcadreObjects2.length = 0;
gdjs.menuCode.GDcadreObjects3.length = 0;
gdjs.menuCode.GDcadreObjects4.length = 0;
gdjs.menuCode.GDcadreObjects5.length = 0;
gdjs.menuCode.GDcadreObjects6.length = 0;
gdjs.menuCode.GDcadreObjects7.length = 0;
gdjs.menuCode.GDtexteObjects1.length = 0;
gdjs.menuCode.GDtexteObjects2.length = 0;
gdjs.menuCode.GDtexteObjects3.length = 0;
gdjs.menuCode.GDtexteObjects4.length = 0;
gdjs.menuCode.GDtexteObjects5.length = 0;
gdjs.menuCode.GDtexteObjects6.length = 0;
gdjs.menuCode.GDtexteObjects7.length = 0;
gdjs.menuCode.GDiconObjects1.length = 0;
gdjs.menuCode.GDiconObjects2.length = 0;
gdjs.menuCode.GDiconObjects3.length = 0;
gdjs.menuCode.GDiconObjects4.length = 0;
gdjs.menuCode.GDiconObjects5.length = 0;
gdjs.menuCode.GDiconObjects6.length = 0;
gdjs.menuCode.GDiconObjects7.length = 0;
gdjs.menuCode.GDSwitchObjects1.length = 0;
gdjs.menuCode.GDSwitchObjects2.length = 0;
gdjs.menuCode.GDSwitchObjects3.length = 0;
gdjs.menuCode.GDSwitchObjects4.length = 0;
gdjs.menuCode.GDSwitchObjects5.length = 0;
gdjs.menuCode.GDSwitchObjects6.length = 0;
gdjs.menuCode.GDSwitchObjects7.length = 0;
gdjs.menuCode.GDboutonObjects1.length = 0;
gdjs.menuCode.GDboutonObjects2.length = 0;
gdjs.menuCode.GDboutonObjects3.length = 0;
gdjs.menuCode.GDboutonObjects4.length = 0;
gdjs.menuCode.GDboutonObjects5.length = 0;
gdjs.menuCode.GDboutonObjects6.length = 0;
gdjs.menuCode.GDboutonObjects7.length = 0;
gdjs.menuCode.GDretour_9595menuObjects1.length = 0;
gdjs.menuCode.GDretour_9595menuObjects2.length = 0;
gdjs.menuCode.GDretour_9595menuObjects3.length = 0;
gdjs.menuCode.GDretour_9595menuObjects4.length = 0;
gdjs.menuCode.GDretour_9595menuObjects5.length = 0;
gdjs.menuCode.GDretour_9595menuObjects6.length = 0;
gdjs.menuCode.GDretour_9595menuObjects7.length = 0;
gdjs.menuCode.GDFondObjects1.length = 0;
gdjs.menuCode.GDFondObjects2.length = 0;
gdjs.menuCode.GDFondObjects3.length = 0;
gdjs.menuCode.GDFondObjects4.length = 0;
gdjs.menuCode.GDFondObjects5.length = 0;
gdjs.menuCode.GDFondObjects6.length = 0;
gdjs.menuCode.GDFondObjects7.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects5.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects6.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects7.length = 0;

gdjs.menuCode.eventsList50(runtimeScene);
gdjs.menuCode.GDcadreObjects1.length = 0;
gdjs.menuCode.GDcadreObjects2.length = 0;
gdjs.menuCode.GDcadreObjects3.length = 0;
gdjs.menuCode.GDcadreObjects4.length = 0;
gdjs.menuCode.GDcadreObjects5.length = 0;
gdjs.menuCode.GDcadreObjects6.length = 0;
gdjs.menuCode.GDcadreObjects7.length = 0;
gdjs.menuCode.GDtexteObjects1.length = 0;
gdjs.menuCode.GDtexteObjects2.length = 0;
gdjs.menuCode.GDtexteObjects3.length = 0;
gdjs.menuCode.GDtexteObjects4.length = 0;
gdjs.menuCode.GDtexteObjects5.length = 0;
gdjs.menuCode.GDtexteObjects6.length = 0;
gdjs.menuCode.GDtexteObjects7.length = 0;
gdjs.menuCode.GDiconObjects1.length = 0;
gdjs.menuCode.GDiconObjects2.length = 0;
gdjs.menuCode.GDiconObjects3.length = 0;
gdjs.menuCode.GDiconObjects4.length = 0;
gdjs.menuCode.GDiconObjects5.length = 0;
gdjs.menuCode.GDiconObjects6.length = 0;
gdjs.menuCode.GDiconObjects7.length = 0;
gdjs.menuCode.GDSwitchObjects1.length = 0;
gdjs.menuCode.GDSwitchObjects2.length = 0;
gdjs.menuCode.GDSwitchObjects3.length = 0;
gdjs.menuCode.GDSwitchObjects4.length = 0;
gdjs.menuCode.GDSwitchObjects5.length = 0;
gdjs.menuCode.GDSwitchObjects6.length = 0;
gdjs.menuCode.GDSwitchObjects7.length = 0;
gdjs.menuCode.GDboutonObjects1.length = 0;
gdjs.menuCode.GDboutonObjects2.length = 0;
gdjs.menuCode.GDboutonObjects3.length = 0;
gdjs.menuCode.GDboutonObjects4.length = 0;
gdjs.menuCode.GDboutonObjects5.length = 0;
gdjs.menuCode.GDboutonObjects6.length = 0;
gdjs.menuCode.GDboutonObjects7.length = 0;
gdjs.menuCode.GDretour_9595menuObjects1.length = 0;
gdjs.menuCode.GDretour_9595menuObjects2.length = 0;
gdjs.menuCode.GDretour_9595menuObjects3.length = 0;
gdjs.menuCode.GDretour_9595menuObjects4.length = 0;
gdjs.menuCode.GDretour_9595menuObjects5.length = 0;
gdjs.menuCode.GDretour_9595menuObjects6.length = 0;
gdjs.menuCode.GDretour_9595menuObjects7.length = 0;
gdjs.menuCode.GDFondObjects1.length = 0;
gdjs.menuCode.GDFondObjects2.length = 0;
gdjs.menuCode.GDFondObjects3.length = 0;
gdjs.menuCode.GDFondObjects4.length = 0;
gdjs.menuCode.GDFondObjects5.length = 0;
gdjs.menuCode.GDFondObjects6.length = 0;
gdjs.menuCode.GDFondObjects7.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects5.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects6.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects7.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
