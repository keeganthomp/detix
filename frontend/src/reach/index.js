// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function TicketBuyer(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for TicketBuyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for TicketBuyer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc1, ctc0], false, false));
  const [v27, v28, v29] = txn1.data;
  const v33 = txn1.time;
  const v26 = txn1.from;
  ;
  ;
  ;
  const v38 = stdlib.gt(v27, stdlib.checkedBigNumberify('./index.rsh:48:40:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v38, {
    at: './index.rsh:48:12:application',
    fs: [],
    msg: null,
    who: 'TicketBuyer'
    });
  let v41 = true;
  let v42 = stdlib.checkedBigNumberify('./index.rsh:51:72:decimal', stdlib.UInt_max, 0);
  let v129 = v33;
  let v131 = stdlib.checkedBigNumberify('./index.rsh:31:49:application', stdlib.UInt_max, 0);
  let v132 = v27;
  
  while ((() => {
    const v52 = stdlib.sub(v27, v42);
    const v54 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:56:69:decimal', stdlib.UInt_max, 0));
    const v56 = v54 ? false : true;
    const v59 = v41 ? v56 : false;
    
    return v59;})()) {
    const v73 = stdlib.protect(ctc2, await interact.checkIfBuyingTicket(v129), {
      at: './index.rsh:61:73:application',
      fs: ['at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:59:13:function exp)', 'at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)'],
      msg: 'checkIfBuyingTicket',
      who: 'TicketBuyer'
      });
    
    const txn2 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:51:64:dot', stdlib.UInt_max, 5), [ctc5, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc3], [v26, v27, v28, v29, v42, v129, v131, v132, null], [v29, []], [ctc3], v73, false, stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 5), (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:51:64:dot', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v129, v131, v132]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:51:64:dot', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v131, v132]);
      const [v78] = txn2.data;
      const v83 = txn2.time;
      const v77 = txn2.from;
      
      const v82 = stdlib.add(v131, v29);
      sim_r.txns.push({
        amt: v29,
        kind: 'to',
        tok: undefined
        });
      
      const v89 = stdlib.ge(v132, stdlib.checkedBigNumberify('./index.rsh:72:38:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v89, {
        at: './index.rsh:72:18:application',
        fs: ['at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)'],
        msg: null,
        who: 'TicketBuyer'
        });
      const v93 = stdlib.sub(v132, stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, 1));
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, 1),
        kind: 'from',
        to: v77,
        tok: v28
        });
      const v97 = stdlib.sub(v82, v29);
      sim_r.txns.push({
        amt: v29,
        kind: 'from',
        to: v26,
        tok: undefined
        });
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 5), v26, v27, v28, v29, v42, v83, v93, v97]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 5), v26, v27, v28, v29, v42, v93, v97]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:after expr stmt', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:84:17:dot', stdlib.UInt_max, 5), [ctc5, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0], [v26, v27, v28, v29, v42, v129, v131, v132], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:84:17:dot', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v129, v131, v132]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:84:17:dot', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v131, v132]);
        const [] = txn3.data;
        const v113 = txn3.time;
        const v111 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv41 = true;
        const cv42 = v42;
        const cv129 = v113;
        const cv131 = v131;
        const cv132 = v132;
        
        (() => {
          const v41 = cv41;
          const v42 = cv42;
          const v129 = cv129;
          const v131 = cv131;
          const v132 = cv132;
          
          if ((() => {
            const v52 = stdlib.sub(v27, v42);
            const v54 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:56:69:decimal', stdlib.UInt_max, 0));
            const v56 = v54 ? false : true;
            const v59 = v41 ? v56 : false;
            
            return v59;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v129, v131, v132]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v131, v132]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v132,
              kind: 'from',
              to: v26,
              tok: v28
              });
            sim_r.txns.push({
              amt: v131,
              kind: 'from',
              to: v26,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v28
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v113 = txn3.time;
      const v111 = txn3.from;
      ;
      const cv41 = true;
      const cv42 = v42;
      const cv129 = v113;
      const cv131 = v131;
      const cv132 = v132;
      
      v41 = cv41;
      v42 = cv42;
      v129 = cv129;
      v131 = cv131;
      v132 = cv132;
      
      continue;
      }
    else {
      const [v78] = txn2.data;
      const v83 = txn2.time;
      const v77 = txn2.from;
      const v82 = stdlib.add(v131, v29);
      ;
      stdlib.protect(ctc3, await interact.log(v77), {
        at: './index.rsh:70:25:application',
        fs: ['at ./index.rsh:69:27:application call to [unknown function] (defined at: ./index.rsh:69:31:function exp)', 'at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)'],
        msg: 'log',
        who: 'TicketBuyer'
        });
      
      const v89 = stdlib.ge(v132, stdlib.checkedBigNumberify('./index.rsh:72:38:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v89, {
        at: './index.rsh:72:18:application',
        fs: ['at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)'],
        msg: null,
        who: 'TicketBuyer'
        });
      const v93 = stdlib.sub(v132, stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, 1));
      ;
      const v97 = stdlib.sub(v82, v29);
      ;
      const txn3 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:79:23:dot', stdlib.UInt_max, 5), [ctc5, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0], [v26, v27, v28, v29, v42, v83, v93, v97], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:79:23:dot', stdlib.UInt_max, 5), v26, v27, v28, v29, v42, v83, v93, v97]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:79:23:dot', stdlib.UInt_max, 5), v26, v27, v28, v29, v42, v93, v97]);
        const [] = txn3.data;
        const v104 = txn3.time;
        const v102 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v106 = stdlib.gt(v93, stdlib.checkedBigNumberify('./index.rsh:80:37:decimal', stdlib.UInt_max, 0));
        const v107 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:80:54:decimal', stdlib.UInt_max, 1));
        const cv41 = v106;
        const cv42 = v107;
        const cv129 = v104;
        const cv131 = v97;
        const cv132 = v93;
        
        (() => {
          const v41 = cv41;
          const v42 = cv42;
          const v129 = cv129;
          const v131 = cv131;
          const v132 = cv132;
          
          if ((() => {
            const v52 = stdlib.sub(v27, v42);
            const v54 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:56:69:decimal', stdlib.UInt_max, 0));
            const v56 = v54 ? false : true;
            const v59 = v41 ? v56 : false;
            
            return v59;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v129, v131, v132]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v131, v132]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v132,
              kind: 'from',
              to: v26,
              tok: v28
              });
            sim_r.txns.push({
              amt: v131,
              kind: 'from',
              to: v26,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v28
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v104 = txn3.time;
      const v102 = txn3.from;
      ;
      const v106 = stdlib.gt(v93, stdlib.checkedBigNumberify('./index.rsh:80:37:decimal', stdlib.UInt_max, 0));
      const v107 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:80:54:decimal', stdlib.UInt_max, 1));
      const cv41 = v106;
      const cv42 = v107;
      const cv129 = v104;
      const cv131 = v97;
      const cv132 = v93;
      
      v41 = cv41;
      v42 = cv42;
      v129 = cv129;
      v131 = cv131;
      v132 = cv132;
      
      continue;
      }
    }
  ;
  ;
  return;
  
  };
export async function TicketProvider(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for TicketProvider expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for TicketProvider expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.ticketPrice, 'for TicketProvider\'s interact field ticketPrice');
  
  const v23 = stdlib.protect(ctc1, await interact.getTicket(), {
    at: './index.rsh:33:51:application',
    fs: ['at ./index.rsh:32:24:application call to [unknown function] (defined at: ./index.rsh:32:28:function exp)'],
    msg: 'getTicket',
    who: 'TicketProvider'
    });
  const v24 = stdlib.protect(ctc0, await interact.getMaxNumberOfTickets(), {
    at: './index.rsh:35:39:application',
    fs: ['at ./index.rsh:32:24:application call to [unknown function] (defined at: ./index.rsh:32:28:function exp)'],
    msg: 'getMaxNumberOfTickets',
    who: 'TicketProvider'
    });
  const v25 = stdlib.gt(v24, stdlib.checkedBigNumberify('./index.rsh:38:43:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v25, {
    at: './index.rsh:38:15:application',
    fs: ['at ./index.rsh:32:24:application call to [unknown function] (defined at: ./index.rsh:32:28:function exp)'],
    msg: null,
    who: 'TicketProvider'
    });
  
  const txn1 = await (ctc.sendrecv(1, 3, stdlib.checkedBigNumberify('./index.rsh:41:22:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc1, ctc0], [v19, v24, v23, v18], [stdlib.checkedBigNumberify('./index.rsh:41:22:dot', stdlib.UInt_max, 0), [[v24, v23]]], [ctc0, ctc1, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:41:22:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:41:22:dot', stdlib.UInt_max, 0)]);
    const [v27, v28, v29] = txn1.data;
    const v33 = txn1.time;
    const v26 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:41:22:dot', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
      kind: 'init',
      tok: v28
      });
    sim_r.txns.push({
      amt: v27,
      kind: 'to',
      tok: v28
      });
    
    const v38 = stdlib.gt(v27, stdlib.checkedBigNumberify('./index.rsh:48:40:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v38, {
      at: './index.rsh:48:12:application',
      fs: [],
      msg: null,
      who: 'TicketProvider'
      });
    const v41 = true;
    const v42 = stdlib.checkedBigNumberify('./index.rsh:51:72:decimal', stdlib.UInt_max, 0);
    const v129 = v33;
    const v131 = stdlib.checkedBigNumberify('./index.rsh:31:49:application', stdlib.UInt_max, 0);
    const v132 = v27;
    
    if ((() => {
      const v52 = stdlib.sub(v27, v42);
      const v54 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:56:69:decimal', stdlib.UInt_max, 0));
      const v56 = v54 ? false : true;
      const v59 = v41 ? v56 : false;
      
      return v59;})()) {
      sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v129, v131, v132]);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v131, v132]);
      sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.txns.push({
        amt: v132,
        kind: 'from',
        to: v26,
        tok: v28
        });
      sim_r.txns.push({
        amt: v131,
        kind: 'from',
        to: v26,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v28
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc7, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
      sim_r.view = [ctc7, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v27, v28, v29] = txn1.data;
  const v33 = txn1.time;
  const v26 = txn1.from;
  ;
  ;
  ;
  stdlib.protect(ctc2, await interact.showAvailableTickets(v27), {
    at: './index.rsh:46:38:application',
    fs: ['at ./index.rsh:45:26:application call to [unknown function] (defined at: ./index.rsh:45:30:function exp)'],
    msg: 'showAvailableTickets',
    who: 'TicketProvider'
    });
  
  const v38 = stdlib.gt(v27, stdlib.checkedBigNumberify('./index.rsh:48:40:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v38, {
    at: './index.rsh:48:12:application',
    fs: [],
    msg: null,
    who: 'TicketProvider'
    });
  let v41 = true;
  let v42 = stdlib.checkedBigNumberify('./index.rsh:51:72:decimal', stdlib.UInt_max, 0);
  let v129 = v33;
  let v131 = stdlib.checkedBigNumberify('./index.rsh:31:49:application', stdlib.UInt_max, 0);
  let v132 = v27;
  
  while ((() => {
    const v52 = stdlib.sub(v27, v42);
    const v54 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:56:69:decimal', stdlib.UInt_max, 0));
    const v56 = v54 ? false : true;
    const v59 = v41 ? v56 : false;
    
    return v59;})()) {
    const txn2 = await (ctc.recv(4, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 5)));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:84:17:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0], [v26, v27, v28, v29, v42, v129, v131, v132], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:84:17:dot', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v129, v131, v132]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:84:17:dot', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v131, v132]);
        const [] = txn3.data;
        const v113 = txn3.time;
        const v111 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv41 = true;
        const cv42 = v42;
        const cv129 = v113;
        const cv131 = v131;
        const cv132 = v132;
        
        (() => {
          const v41 = cv41;
          const v42 = cv42;
          const v129 = cv129;
          const v131 = cv131;
          const v132 = cv132;
          
          if ((() => {
            const v52 = stdlib.sub(v27, v42);
            const v54 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:56:69:decimal', stdlib.UInt_max, 0));
            const v56 = v54 ? false : true;
            const v59 = v41 ? v56 : false;
            
            return v59;})()) {
            sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v129, v131, v132]);
            sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v131, v132]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v132,
              kind: 'from',
              to: v26,
              tok: v28
              });
            sim_r.txns.push({
              amt: v131,
              kind: 'from',
              to: v26,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v28
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc7, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
            sim_r.view = [ctc7, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v113 = txn3.time;
      const v111 = txn3.from;
      ;
      const cv41 = true;
      const cv42 = v42;
      const cv129 = v113;
      const cv131 = v131;
      const cv132 = v132;
      
      v41 = cv41;
      v42 = cv42;
      v129 = cv129;
      v131 = cv131;
      v132 = cv132;
      
      continue;
      }
    else {
      const [v78] = txn2.data;
      const v83 = txn2.time;
      const v77 = txn2.from;
      const v82 = stdlib.add(v131, v29);
      ;
      const v89 = stdlib.ge(v132, stdlib.checkedBigNumberify('./index.rsh:72:38:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v89, {
        at: './index.rsh:72:18:application',
        fs: ['at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)'],
        msg: null,
        who: 'TicketProvider'
        });
      const v93 = stdlib.sub(v132, stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, 1));
      ;
      const v97 = stdlib.sub(v82, v29);
      ;
      stdlib.protect(ctc2, await interact.showAvailableTickets(v93), {
        at: './index.rsh:76:42:application',
        fs: ['at ./index.rsh:75:30:application call to [unknown function] (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)'],
        msg: 'showAvailableTickets',
        who: 'TicketProvider'
        });
      
      const txn3 = await (ctc.recv(6, 0, [], false, false));
      const [] = txn3.data;
      const v104 = txn3.time;
      const v102 = txn3.from;
      ;
      const v106 = stdlib.gt(v93, stdlib.checkedBigNumberify('./index.rsh:80:37:decimal', stdlib.UInt_max, 0));
      const v107 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:80:54:decimal', stdlib.UInt_max, 1));
      const cv41 = v106;
      const cv42 = v107;
      const cv129 = v104;
      const cv131 = v97;
      const cv132 = v93;
      
      v41 = cv41;
      v42 = cv42;
      v129 = cv129;
      v131 = cv131;
      v132 = cv132;
      
      continue;
      }
    }
  ;
  ;
  return;
  
  };
export async function TicketReceiver(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for TicketReceiver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for TicketReceiver expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc1, ctc0], false, false));
  const [v27, v28, v29] = txn1.data;
  const v33 = txn1.time;
  const v26 = txn1.from;
  ;
  ;
  ;
  const v38 = stdlib.gt(v27, stdlib.checkedBigNumberify('./index.rsh:48:40:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v38, {
    at: './index.rsh:48:12:application',
    fs: [],
    msg: null,
    who: 'TicketReceiver'
    });
  let v41 = true;
  let v42 = stdlib.checkedBigNumberify('./index.rsh:51:72:decimal', stdlib.UInt_max, 0);
  let v129 = v33;
  let v131 = stdlib.checkedBigNumberify('./index.rsh:31:49:application', stdlib.UInt_max, 0);
  let v132 = v27;
  
  while ((() => {
    const v52 = stdlib.sub(v27, v42);
    const v54 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:56:69:decimal', stdlib.UInt_max, 0));
    const v56 = v54 ? false : true;
    const v59 = v41 ? v56 : false;
    
    return v59;})()) {
    const txn2 = await (ctc.recv(4, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 5)));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:84:17:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0], [v26, v27, v28, v29, v42, v129, v131, v132], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:84:17:dot', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v129, v131, v132]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:84:17:dot', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v131, v132]);
        const [] = txn3.data;
        const v113 = txn3.time;
        const v111 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv41 = true;
        const cv42 = v42;
        const cv129 = v113;
        const cv131 = v131;
        const cv132 = v132;
        
        (() => {
          const v41 = cv41;
          const v42 = cv42;
          const v129 = cv129;
          const v131 = cv131;
          const v132 = cv132;
          
          if ((() => {
            const v52 = stdlib.sub(v27, v42);
            const v54 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:56:69:decimal', stdlib.UInt_max, 0));
            const v56 = v54 ? false : true;
            const v59 = v41 ? v56 : false;
            
            return v59;})()) {
            sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v129, v131, v132]);
            sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v27, v28, v29, v42, v131, v132]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:51:64:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v132,
              kind: 'from',
              to: v26,
              tok: v28
              });
            sim_r.txns.push({
              amt: v131,
              kind: 'from',
              to: v26,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v28
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc7, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
            sim_r.view = [ctc7, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v113 = txn3.time;
      const v111 = txn3.from;
      ;
      const cv41 = true;
      const cv42 = v42;
      const cv129 = v113;
      const cv131 = v131;
      const cv132 = v132;
      
      v41 = cv41;
      v42 = cv42;
      v129 = cv129;
      v131 = cv131;
      v132 = cv132;
      
      continue;
      }
    else {
      const [v78] = txn2.data;
      const v83 = txn2.time;
      const v77 = txn2.from;
      const v82 = stdlib.add(v131, v29);
      ;
      const v89 = stdlib.ge(v132, stdlib.checkedBigNumberify('./index.rsh:72:38:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v89, {
        at: './index.rsh:72:18:application',
        fs: ['at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)'],
        msg: null,
        who: 'TicketReceiver'
        });
      const v93 = stdlib.sub(v132, stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, 1));
      ;
      const v97 = stdlib.sub(v82, v29);
      ;
      const txn3 = await (ctc.recv(6, 0, [], false, false));
      const [] = txn3.data;
      const v104 = txn3.time;
      const v102 = txn3.from;
      ;
      const v106 = stdlib.gt(v93, stdlib.checkedBigNumberify('./index.rsh:80:37:decimal', stdlib.UInt_max, 0));
      const v107 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:80:54:decimal', stdlib.UInt_max, 1));
      const cv41 = v106;
      const cv42 = v107;
      const cv129 = v104;
      const cv131 = v97;
      const cv132 = v93;
      
      v41 = cv41;
      v42 = cv42;
      v129 = cv129;
      v131 = cv131;
      v132 = cv132;
      
      continue;
      }
    }
  ;
  ;
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 270
    }, null, null, {
    count: 9,
    size: 326
    }, {
    count: 9,
    size: 326
    }, {
    count: 9,
    size: 326
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
dup
substring 16 24
btoi
store 253
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:41:22:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Initializing token
gtxn 4 XferAsset
load 254
==
assert
gtxn 4 TypeEnum
int axfer
==
assert
gtxn 4 AssetReceiver
byte "{{ContractAddr}}"
==
assert
gtxn 4 AssetAmount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// "CheckPay"
// "./index.rsh:41:22:dot"
// "[]"
gtxn 5 XferAsset
load 254
==
assert
gtxn 5 TypeEnum
int axfer
==
assert
gtxn 5 AssetReceiver
byte "{{ContractAddr}}"
==
assert
gtxn 5 AssetAmount
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Nothing
// "./index.rsh:48:12:application"
// "[]"
load 255
int 0
>
assert
load 255
int 0
==
bz l0
gtxn 6 XferAsset
load 254
==
assert
gtxn 6 TypeEnum
int axfer
==
assert
gtxn 6 AssetReceiver
gtxn 0 Sender
==
assert
gtxn 6 AssetAmount
load 255
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 7 XferAsset
load 254
==
assert
gtxn 7 TypeEnum
int axfer
==
assert
// We don't check the receiver
gtxn 7 AssetAmount
int 0
==
assert
gtxn 7 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 7 AssetCloseTo
byte "{{Deployer}}"
==
assert
gtxn 8 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 8 Amount
int 0
==
assert
gtxn 8 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 8 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 9
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 6 Fee
+
gtxn 7 Fee
+
gtxn 8 Fee
+
int 100000
int 1
*
+
==
assert
// Check time limits
b checkAccts
l0:
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
gtxn 0 Sender
concat
load 255
itob
concat
load 254
itob
concat
load 253
itob
concat
int 0
itob
concat
int 0
itob
concat
load 255
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
int 100000
int 1
*
+
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
dup
substring 64 72
btoi
store 250
dup
substring 72 80
btoi
store 249
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 0
store 248
pop
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:51:64:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 252
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Nothing
// "./index.rsh:72:18:application"
// "[at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)]"
load 249
int 1
>=
assert
load 249
int 1
-
store 247
gtxn 4 XferAsset
load 253
==
assert
gtxn 4 TypeEnum
int axfer
==
assert
gtxn 4 AssetReceiver
gtxn 0 Sender
==
assert
gtxn 4 AssetAmount
int 1
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
load 250
load 252
+
load 252
-
store 246
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 255
==
assert
gtxn 5 Amount
load 252
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 247
itob
concat
load 246
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 5
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
dup
gtxn 4 LastValid
>=
assert
dup
gtxn 5 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
dup
substring 64 72
btoi
store 250
dup
substring 72 80
btoi
store 249
pop
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:84:17:dot"
// "[at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 254
load 251
-
int 0
==
bz l0
gtxn 4 XferAsset
load 253
==
assert
gtxn 4 TypeEnum
int axfer
==
assert
gtxn 4 AssetReceiver
load 255
==
assert
gtxn 4 AssetAmount
load 249
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 255
==
assert
gtxn 5 Amount
load 250
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 6 XferAsset
load 253
==
assert
gtxn 6 TypeEnum
int axfer
==
assert
// We don't check the receiver
gtxn 6 AssetAmount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 AssetCloseTo
byte "{{Deployer}}"
==
assert
gtxn 7 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 7 Amount
int 0
==
assert
gtxn 7 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 7 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 8
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
gtxn 7 Fee
+
==
assert
// Check time limits
load 4
btoi
int 5
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
dup
gtxn 6 FirstValid
<=
assert
dup
gtxn 7 FirstValid
<=
assert
pop
b checkAccts
l0:
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 5
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
dup
substring 64 72
btoi
store 250
dup
substring 72 80
btoi
store 249
pop
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 5
int 5
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:79:23:dot"
// "[at ./index.rsh:51:64:application call to [unknown function] (defined at: ./index.rsh:51:64:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 251
int 1
+
store 248
load 250
int 0
>
load 254
load 248
-
int 0
==
!
&&
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 248
itob
concat
load 249
itob
concat
load 250
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
gtxn 4 XferAsset
load 253
==
assert
gtxn 4 TypeEnum
int axfer
==
assert
gtxn 4 AssetReceiver
load 255
==
assert
gtxn 4 AssetAmount
load 250
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 255
==
assert
gtxn 5 Amount
load 249
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 6 XferAsset
load 253
==
assert
gtxn 6 TypeEnum
int axfer
==
assert
// We don't check the receiver
gtxn 6 AssetAmount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 AssetCloseTo
byte "{{Deployer}}"
==
assert
gtxn 7 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 7 Amount
int 0
==
assert
gtxn 7 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 7 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 8
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
gtxn 7 Fee
+
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v78",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v93",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v78",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v93",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610e4e806100826000396000f3fe6080604052600436106100435760003560e01c80631ab7b6cb1461004f578063c024647c14610064578063c7ea131f14610077578063ff2f98f71461008a57600080fd5b3661004a57005b600080fd5b61006261005d366004610bee565b61009d565b005b610062610072366004610bd1565b6101e5565b610062610085366004610bd1565b610326565b610062610098366004610bd1565b61045c565b60408051600060208201528235918101919091526100dc906060016040516020818303038152906040528051906020012060001c60005414600a6106bd565b600080556100ec341560076106bd565b61011461010d336101036060850160408601610b99565b60208501356106e3565b60086106bd565b6101256020820135151560096106bd565b7f286ad00c99703aa9b1aa89d017fd8638320fd914d2616521961051eb7fed9350816040516101549190610d0a565b60405180910390a1610164610afb565b805133905280516020808401359101526101846060830160408401610b99565b81516001600160a01b0390911660409182015281516060808501359181019190915260208084018051600190528051600090830181905281514395019490945280519092019290925251908301356080909101526101e1816106fb565b5050565b604051610221906101fd906004908490602001610d46565b6040516020818303038152906040528051906020012060001c6000541460106106bd565b60008055610241610237600560a0840135610dc5565b43101560116106bd565b61024d3415600f6106bd565b7ffb6b0bd13e417883a58139f0137049111a4fd1269a40a02046037f7423fd7cf18160405161027c9190610cf5565b60405180910390a161028c610afb565b6102996020830183610b99565b81516001600160a01b03909116905280516020808401359101526102c36060830160408401610b99565b81516001600160a01b03909116604091820152815160608085013591810191909152602080840180516001905280516080808801359190930152805143940193909352825160c0860135920191909152905160e08401359101526101e1816106fb565b6040516103629061033e906005908490602001610d46565b6040516020818303038152906040528051906020012060001c6000541460136106bd565b60008055610372341560126106bd565b7f18937b994d2f15b3572dafd0c711e8fdb0d4355d0158239260579ac50bce7196816040516103a19190610cf5565b60405180910390a16103b1610afb565b6103be6020830183610b99565b81516001600160a01b03909116905280516020808401359101526103e86060830160408401610b99565b81516001600160a01b039091166040909101528051606080840135910152602081015160c08301351515905261042360016080840135610dc5565b6020808301805190910191909152805143604090910152805160e08401356060909101525160c08301356080909101526101e1816106fb565b60405161049890610474906004908490602001610d46565b6040516020818303038152906040528051906020012060001c60005414600d6106bd565b60008080556040805180820190915281815260208101919091526104cd6104c4600560a0850135610dc5565b4310600e6106bd565b6104de34606084013514600b6106bd565b6104f1600160e08401351015600c6106bd565b610500600160e0840135610ddd565b815261051d6105156060840160408501610b99565b33600161089d565b60608201356105308160c0850135610dc5565b61053a9190610ddd565b60208083019190915261054f90830183610b99565b6040516001600160a01b039190911690606084013580156108fc02916000818181858888f1935050505015801561058a573d6000803e3d6000fd5b507f0e2fa1297398bcc5b203f75abf2d83d2f384b26ab8ef951d16143a2a9cb6c1c1826040516105ba9190610cc9565b60405180910390a161061c60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b6106296020840184610b99565b6001600160a01b031681526020808401359082015261064e6060840160408501610b99565b6001600160a01b031660408083019190915260608085013590830152608080850135908301524360a0830152825160c083015260208084015160e0840152905161069d91600591849101610d5b565b60408051601f198184030181529190528051602090910120600055505050565b816101e15760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006106f1838530856108b6565b90505b9392505050565b60208101515161070c576000610739565b600081602001516020015182600001516020015161072a9190610ddd565b14610736576001610739565b60005b1561082d5761079860405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051830151608080870191909152815185015160a087015281519092015160c086015251015160e0840152905161080e91600491849101610d5b565b60408051601f1981840301815291905280516020909101206000555050565b6040805160c08101825260008183018181526060808401838152608080860185815260a087018681528588526020808901979097528951516001600160a01b039081169096528951909801519094169091529286018051909101519091525101519091526101e181610990565b50565b6108a88383836109ef565b6108b157600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161091d91610c8e565b60006040518083038185875af1925050503d806000811461095a576040519150601f19603f3d011682016040523d82523d6000602084013e61095f565b606091505b509150915061097082826001610ac0565b50808060200190518101906109859190610bb4565b979650505050505050565b8051602081015181516060909201516109a9929061089d565b8051805160409182015191516001600160a01b039091169180156108fc02916000818181858888f193505050501580156109e7573d6000803e3d6000fd5b506000805533ff5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610a4e91610c8e565b60006040518083038185875af1925050503d8060008114610a8b576040519150601f19603f3d011682016040523d82523d6000602084013e610a90565b606091505b5091509150610aa182826002610ac0565b5080806020019051810190610ab69190610bb4565b9695505050505050565b60608315610acf5750816106f4565b825115610adf5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016106da565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610b5f6040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b905290565b80356001600160a01b0381168114610b7b57600080fd5b919050565b60006101208284031215610b9357600080fd5b50919050565b600060208284031215610bab57600080fd5b6106f482610b64565b600060208284031215610bc657600080fd5b81516106f481610e0a565b60006101208284031215610be457600080fd5b6106f48383610b80565b600060808284031215610b9357600080fd5b6001600160a01b0380610c1283610b64565b1683526020820135602084015280610c2c60408401610b64565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b610c738282610c00565b61010080820135610c8381610e0a565b151592019190915250565b6000825160005b81811015610caf5760208186018101518583015201610c95565b81811115610cbe576000828501525b509190910192915050565b6101208101610cd88284610c00565b61010080840135610ce881610e0a565b1515920191909152919050565b6101208101610d048284610c69565b92915050565b8135815260208083013590820152608081016001600160a01b03610d3060408501610b64565b1660408301526060830135606083015292915050565b82815261012081016106f46020830184610c00565b82815261012081016106f4602083018460018060a01b038082511683526020820151602084015280604083015116604084015250606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b60008219821115610dd857610dd8610df4565b500190565b600082821015610def57610def610df4565b500390565b634e487b7160e01b600052601160045260246000fd5b801515811461089a57600080fdfea26469706673582212204abf1f2b3210f68b9d5e53970316486fe7c4208806c8f2d1c62ebf1139699b3864736f6c63430008050033`,
  BytecodeLen: 3792,
  Which: `oD`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

