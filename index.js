/**
 * @file mofron-comp-selectbox/index.js
 * @brief grid component for mofron
 * @license MIT
 */
const Frame   = require('mofron-comp-frame');
const Hover   = require('mofron-event-hover');
const Click   = require('mofron-event-click');
const ConfArg = mofron.class.ConfArg;
const comutl  = mofron.util.common;

module.exports = class extends Frame {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("selectbox");
            
	    /* init config */
            this.confmng().add('hoverEvent', { type:'event', list:true });
            this.confmng().add('selectEvent', { type:'event', list:true });
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        try {
            super.initDomConts();
            this.baseColor('white');
            
            let hov_evt = (h1,h2,h3) => {
                try {
                    let evt_lst = h1.hoverEvent();
                    for (let eidx in evt_lst) {
                        evt_lst[eidx][0](h1,h2,evt_lst[eidx][1]);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            let sel_evt = (s1,s2,s3) => {
                try {
                    let evt_lst = s1.selectEvent();
                    for (let eidx in evt_lst) {
                        evt_lst[eidx][0](s1,s2,evt_lst[eidx][1]);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            this.event([
                new Hover(this.hov_evt),
                new Click(this.sel_evt)
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    hoverEvent (fnc,prm) {
        try {
            return this.confmng(
	               'hoverEvent',
                       (undefined === fnc) ? fnc : [fnc,prm]
                   );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    selectEvent (fnc,prm) {
        try {
            return this.confmng(
                       'selectEvent',
                       (undefined === fnc) ? fnc : [fnc,prm]
                   );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
