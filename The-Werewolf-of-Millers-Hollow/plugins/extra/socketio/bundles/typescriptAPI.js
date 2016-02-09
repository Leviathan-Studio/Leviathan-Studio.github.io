(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../../default/typescript/typescriptAPI/TypeScriptAPIPlugin.d.ts" />

SupCore.system.registerPlugin("typescriptAPI", "socketio", {
    defs: "// Type definitions for socket.io-client 1.2.0\n// Project: http://socket.io/\n// Definitions by: PROGRE <https://github.com/progre/>\n// Definitions: https://github.com/borisyankov/DefinitelyTyped\n\ndeclare var io: SocketIOClientStatic;\n\ndeclare module 'socket.io-client' {\n    export = io;\n}\n\ninterface SocketIOClientStatic {\n    (host: string, details?: any): SocketIOClient.Socket;\n    (details?: any): SocketIOClient.Socket;\n    connect(host: string, details?: any): SocketIOClient.Socket;\n    connect(details?: any): SocketIOClient.Socket;\n    protocol: number;\n    Socket: { new (...args: any[]): SocketIOClient.Socket };\n    Manager: SocketIOClient.ManagerStatic;\n}\n\ndeclare module SocketIOClient {\n    interface Socket {\n        on(event: string, fn: Function): Socket;\n        once(event: string, fn: Function): Socket;\n        off(event?: string, fn?: Function): Socket;\n        emit(event: string, ...args: any[]): Socket;\n        listeners(event: string): Function[];\n        hasListeners(event: string): boolean;\n        connected: boolean;\n    }\n\n    interface ManagerStatic {\n        (url: string, opts: any): SocketIOClient.Manager;\n        new (url: string, opts: any): SocketIOClient.Manager;\n    }\n\n    interface Manager {\n        reconnection(v: boolean): Manager;\n        reconnectionAttempts(v: boolean): Manager;\n        reconnectionDelay(v: boolean): Manager;\n        reconnectionDelayMax(v: boolean): Manager;\n        timeout(v: boolean): Manager;\n    }\n}\n",
    code: "",
});

},{}]},{},[1]);
