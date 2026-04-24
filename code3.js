gdjs.zone_32d_39essaiCode = {};
gdjs.zone_32d_39essaiCode.localVariables = [];
gdjs.zone_32d_39essaiCode.idToCallbackMap = new Map();
gdjs.zone_32d_39essaiCode.forEachIndex2 = 0;

gdjs.zone_32d_39essaiCode.forEachIndex4 = 0;

gdjs.zone_32d_39essaiCode.forEachObjects2 = [];

gdjs.zone_32d_39essaiCode.forEachObjects4 = [];

gdjs.zone_32d_39essaiCode.forEachTemporary2 = null;

gdjs.zone_32d_39essaiCode.forEachTemporary4 = null;

gdjs.zone_32d_39essaiCode.forEachTotalCount2 = 0;

gdjs.zone_32d_39essaiCode.forEachTotalCount4 = 0;

gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects1= [];
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects2= [];
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3= [];
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects4= [];
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects1= [];
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects2= [];
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects3= [];
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4= [];
gdjs.zone_32d_39essaiCode.GDsliderObjects1= [];
gdjs.zone_32d_39essaiCode.GDsliderObjects2= [];
gdjs.zone_32d_39essaiCode.GDsliderObjects3= [];
gdjs.zone_32d_39essaiCode.GDsliderObjects4= [];
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects1= [];
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects2= [];
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects3= [];
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects4= [];
gdjs.zone_32d_39essaiCode.GDFondObjects1= [];
gdjs.zone_32d_39essaiCode.GDFondObjects2= [];
gdjs.zone_32d_39essaiCode.GDFondObjects3= [];
gdjs.zone_32d_39essaiCode.GDFondObjects4= [];
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects1= [];
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects2= [];
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects3= [];
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects4= [];


gdjs.zone_32d_39essaiCode.eventsList0 = function(runtimeScene) {

};gdjs.zone_32d_39essaiCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("slider"), gdjs.zone_32d_39essaiCode.GDsliderObjects3);

for (gdjs.zone_32d_39essaiCode.forEachIndex4 = 0;gdjs.zone_32d_39essaiCode.forEachIndex4 < gdjs.zone_32d_39essaiCode.GDsliderObjects3.length;++gdjs.zone_32d_39essaiCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("indicateur_couleur"), gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects4);
gdjs.copyArray(gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects2, gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4);

gdjs.zone_32d_39essaiCode.GDsliderObjects4.length = 0;


gdjs.zone_32d_39essaiCode.forEachTemporary4 = gdjs.zone_32d_39essaiCode.GDsliderObjects3[gdjs.zone_32d_39essaiCode.forEachIndex4];
gdjs.zone_32d_39essaiCode.GDsliderObjects4.push(gdjs.zone_32d_39essaiCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4.length;i<l;++i) {
    if ( gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4[i].getVariableString(gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4[i].getVariables().getFromIndex(0)) == ((gdjs.zone_32d_39essaiCode.GDsliderObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.zone_32d_39essaiCode.GDsliderObjects4[0].getVariables()).getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4[k] = gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4[i];
        ++k;
    }
}
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4.length ;i < len;++i) {
    gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4[i].getBehavior("Text").setText(gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4[i].getVariables().getFromIndex(0).getAsString() + ":" + gdjs.evtTools.common.toString((( gdjs.zone_32d_39essaiCode.GDsliderObjects4.length === 0 ) ? 0 :gdjs.zone_32d_39essaiCode.GDsliderObjects4[0].Value(null))));
}
}
{for(var i = 0, len = gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects4.length ;i < len;++i) {
    gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects4[i].returnVariable(gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects4[i].getVariables().getFromIndex(0)).setNumber((( gdjs.zone_32d_39essaiCode.GDsliderObjects4.length === 0 ) ? 0 :gdjs.zone_32d_39essaiCode.GDsliderObjects4[0].Value(null)));
}
}
}
}

}


};gdjs.zone_32d_39essaiCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.zone_32d_39essaiCode.GDsliderObjects2, gdjs.zone_32d_39essaiCode.GDsliderObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.zone_32d_39essaiCode.GDsliderObjects3.length;i<l;++i) {
    if ( gdjs.zone_32d_39essaiCode.GDsliderObjects3[i].getVariableString(gdjs.zone_32d_39essaiCode.GDsliderObjects3[i].getVariables().getFromIndex(0)) == "red" ) {
        isConditionTrue_0 = true;
        gdjs.zone_32d_39essaiCode.GDsliderObjects3[k] = gdjs.zone_32d_39essaiCode.GDsliderObjects3[i];
        ++k;
    }
}
gdjs.zone_32d_39essaiCode.GDsliderObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indicateur_couleur"), gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3);
/* Reuse gdjs.zone_32d_39essaiCode.GDsliderObjects3 */
{for(var i = 0, len = gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3.length ;i < len;++i) {
    gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3[i].returnVariable(gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3[i].getVariables().getFromIndex(0)).setNumber((( gdjs.zone_32d_39essaiCode.GDsliderObjects3.length === 0 ) ? 0 :gdjs.zone_32d_39essaiCode.GDsliderObjects3[0].Value(null)));
}
}
}

}


{

gdjs.copyArray(gdjs.zone_32d_39essaiCode.GDsliderObjects2, gdjs.zone_32d_39essaiCode.GDsliderObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.zone_32d_39essaiCode.GDsliderObjects3.length;i<l;++i) {
    if ( gdjs.zone_32d_39essaiCode.GDsliderObjects3[i].getVariableString(gdjs.zone_32d_39essaiCode.GDsliderObjects3[i].getVariables().getFromIndex(0)) == "green" ) {
        isConditionTrue_0 = true;
        gdjs.zone_32d_39essaiCode.GDsliderObjects3[k] = gdjs.zone_32d_39essaiCode.GDsliderObjects3[i];
        ++k;
    }
}
gdjs.zone_32d_39essaiCode.GDsliderObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indicateur_couleur"), gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3);
/* Reuse gdjs.zone_32d_39essaiCode.GDsliderObjects3 */
{for(var i = 0, len = gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3.length ;i < len;++i) {
    gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3[i].returnVariable(gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3[i].getVariables().getFromIndex(1)).setNumber((( gdjs.zone_32d_39essaiCode.GDsliderObjects3.length === 0 ) ? 0 :gdjs.zone_32d_39essaiCode.GDsliderObjects3[0].Value(null)));
}
}
}

}


{

gdjs.copyArray(gdjs.zone_32d_39essaiCode.GDsliderObjects2, gdjs.zone_32d_39essaiCode.GDsliderObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.zone_32d_39essaiCode.GDsliderObjects3.length;i<l;++i) {
    if ( gdjs.zone_32d_39essaiCode.GDsliderObjects3[i].getVariableString(gdjs.zone_32d_39essaiCode.GDsliderObjects3[i].getVariables().getFromIndex(0)) == "blue" ) {
        isConditionTrue_0 = true;
        gdjs.zone_32d_39essaiCode.GDsliderObjects3[k] = gdjs.zone_32d_39essaiCode.GDsliderObjects3[i];
        ++k;
    }
}
gdjs.zone_32d_39essaiCode.GDsliderObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indicateur_couleur"), gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3);
/* Reuse gdjs.zone_32d_39essaiCode.GDsliderObjects3 */
{for(var i = 0, len = gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3.length ;i < len;++i) {
    gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3[i].returnVariable(gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3[i].getVariables().getFromIndex(2)).setNumber((( gdjs.zone_32d_39essaiCode.GDsliderObjects3.length === 0 ) ? 0 :gdjs.zone_32d_39essaiCode.GDsliderObjects3[0].Value(null)));
}
}
}

}


};gdjs.zone_32d_39essaiCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nom_couleur"), gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects1);

for (gdjs.zone_32d_39essaiCode.forEachIndex2 = 0;gdjs.zone_32d_39essaiCode.forEachIndex2 < gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects1.length;++gdjs.zone_32d_39essaiCode.forEachIndex2) {
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects2.length = 0;


gdjs.zone_32d_39essaiCode.forEachTemporary2 = gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects1[gdjs.zone_32d_39essaiCode.forEachIndex2];
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects2.push(gdjs.zone_32d_39essaiCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.zone_32d_39essaiCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("slider"), gdjs.zone_32d_39essaiCode.GDsliderObjects1);

for (gdjs.zone_32d_39essaiCode.forEachIndex2 = 0;gdjs.zone_32d_39essaiCode.forEachIndex2 < gdjs.zone_32d_39essaiCode.GDsliderObjects1.length;++gdjs.zone_32d_39essaiCode.forEachIndex2) {
gdjs.zone_32d_39essaiCode.GDsliderObjects2.length = 0;


gdjs.zone_32d_39essaiCode.forEachTemporary2 = gdjs.zone_32d_39essaiCode.GDsliderObjects1[gdjs.zone_32d_39essaiCode.forEachIndex2];
gdjs.zone_32d_39essaiCode.GDsliderObjects2.push(gdjs.zone_32d_39essaiCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.zone_32d_39essaiCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("indicateur_couleur"), gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects1);
{for(var i = 0, len = gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects1.length ;i < len;++i) {
    gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects1[i].setColor(gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects1[i].getVariables().getFromIndex(0).getAsString() + ";" + gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects1[i].getVariables().getFromIndex(1).getAsString() + ";" + gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects1[i].getVariables().getFromIndex(2).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retour_menu"), gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects1.length;i<l;++i) {
    if ( gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects1[k] = gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects1[i];
        ++k;
    }
}
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
}

}


};

gdjs.zone_32d_39essaiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDsliderObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDsliderObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDsliderObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDsliderObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDFondObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDFondObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDFondObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDFondObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects4.length = 0;

gdjs.zone_32d_39essaiCode.eventsList3(runtimeScene);
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDindicateur_9595couleurObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDnom_9595couleurObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDsliderObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDsliderObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDsliderObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDsliderObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDretour_9595menuObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDFondObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDFondObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDFondObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDFondObjects4.length = 0;
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.zone_32d_39essaiCode.GDNewTiledSpriteObjects4.length = 0;


return;

}

gdjs['zone_32d_39essaiCode'] = gdjs.zone_32d_39essaiCode;
