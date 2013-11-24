/**
 * NWFramework
 *
 * A simple framework for Node Webkit
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see {http://www.gnu.org/licenses/}.
 *
 * Copyright (C) 2013 Simon Emms <simon@simonemms.com>
 */

/* NodeJS modules */


/* Third-party modules */
var async = require("async");
var datautils = require("datautils");
var nwGlobal = require("nwglobal");


/* Files */



function NWFramework() {

    this.config = null;

    return this;

}



NWFramework.prototype = {

};



module.exports = NWFramework;