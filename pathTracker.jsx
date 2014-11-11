/*
 * Path Tracker
 * Keeps tracking where the current path (directory) is
 */

 function pathTracker(){
    this.path = new Array();

    this.down = function( dirName ){
        this.path.push(dirName);
    };

    this.up=function( dirName){
        this.path.pop(dirName);
    }

    this.getFullPath = function(){
        // if the path start from "/" then use this line
        //return "/" + this.path.join("/");

        return this.path.join("/");
    }
 }
