/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'RectangleCopy3',
            type:'rect',
            rect:['33px','92px','153px','418px','auto','auto'],
            fill:["rgba(235,198,198,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy6',
            type:'rect',
            rect:['204px','92px','332px','418px','auto','auto'],
            fill:["rgba(235,198,198,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy7',
            type:'rect',
            rect:['553px','92px','332px','418px','auto','auto'],
            fill:["rgba(235,198,198,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'wow-8',
            type:'image',
            rect:['259px','189px','200px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wow-8.gif",'0px','0px']
         },
         {
            id:'wow-8Copy',
            type:'image',
            rect:['629px','189px','200px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wow-8.gif",'0px','0px']
         },
         {
            id:'RectangleCopy8',
            type:'rect',
            rect:['904px','92px','169px','420px','auto','auto'],
            fill:["rgba(235,198,198,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy4',
            type:'rect',
            rect:['33px','23px','1040px','59px','auto','auto'],
            fill:["rgba(235,198,198,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_wow-8Copy}": [
            ["style", "left", '629px'],
            ["style", "top", '189px']
         ],
         "${_RectangleCopy8}": [
            ["style", "top", '92px'],
            ["style", "height", '420px'],
            ["color", "background-color", 'rgba(235,198,198,1)'],
            ["style", "left", '904px'],
            ["style", "width", '169px']
         ],
         "${_wow-8}": [
            ["style", "left", '259px'],
            ["style", "top", '189px']
         ],
         "${_RectangleCopy6}": [
            ["style", "top", '92px'],
            ["style", "height", '418px'],
            ["color", "background-color", 'rgba(235,198,198,1)'],
            ["style", "left", '204px'],
            ["style", "width", '332px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1136px'],
            ["style", "height", '640px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '92px'],
            ["style", "height", '418px'],
            ["color", "background-color", 'rgba(235,198,198,1.00)'],
            ["style", "left", '33px'],
            ["style", "width", '153px']
         ],
         "${_RectangleCopy7}": [
            ["style", "top", '92px'],
            ["style", "height", '418px'],
            ["color", "background-color", 'rgba(235,198,198,1)'],
            ["style", "left", '553px'],
            ["style", "width", '332px']
         ],
         "${_RectangleCopy4}": [
            ["style", "top", '23px'],
            ["style", "height", '59px'],
            ["color", "background-color", 'rgba(235,198,198,1)'],
            ["style", "left", '33px'],
            ["style", "width", '1040px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "style", "${_Stage}", "height", '640px', { fromValue: '640px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-805722192");
