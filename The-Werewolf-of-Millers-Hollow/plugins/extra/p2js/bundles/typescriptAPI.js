(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../../default/typescript/typescriptAPI/TypeScriptAPIPlugin.d.ts" />

SupCore.system.registerPlugin("typescriptAPI", "p2", {
    code: "",
    defs: "// Type definitions for p2.js v0.7.1\r\n// Project: https://github.com/schteppe/p2.js/\r\n// Rev 21/11/2015\r\n\r\ndeclare module p2 {\r\n\r\n    export class AABB {\r\n\r\n        constructor(options?: {\r\n            upperBound?: number[];\r\n            lowerBound?: number[];\r\n        });\r\n\r\n        setFromPoints(points: number[][], position: number[], angle: number, skinSize: number): void;\r\n        copy(aabb: AABB): void;\r\n        extend(aabb: AABB): void;\r\n        overlaps(aabb: AABB): boolean;\r\n\r\n    }\r\n\r\n    export class Broadphase {\r\n\r\n        static AABB: number;\r\n        static BOUNDING_CIRCLE: number;\r\n\r\n        static NAIVE: number;\r\n        static SAP: number;\r\n\r\n        static boundingRadiusCheck(bodyA: Body, bodyB: Body): boolean;\r\n        static aabbCheck(bodyA: Body, bodyB: Body): boolean;\r\n        static canCollide(bodyA: Body, bodyB: Body): boolean;\r\n\r\n        constructor(type: number);\r\n\r\n        type: number;\r\n        result: Body[];\r\n        world: World;\r\n        boundingVolumeType: number;\r\n\r\n        setWorld(world: World): void;\r\n        getCollisionPairs(world: World): Body[];\r\n        boundingVolumeCheck(bodyA: Body, bodyB: Body): boolean;\r\n\r\n    }\r\n\r\n    export class GridBroadphase extends Broadphase {\r\n\r\n        constructor(options?: {\r\n            xmin?: number;\r\n            xmax?: number;\r\n            ymin?: number;\r\n            ymax?: number;\r\n            nx?: number;\r\n            ny?: number;\r\n        });\r\n\r\n        xmin: number;\r\n        xmax: number;\r\n        ymin: number;\r\n        ymax: number;\r\n        nx: number;\r\n        ny: number;\r\n        binsizeX: number;\r\n        binsizeY: number;\r\n\r\n    }\r\n\r\n    export class NativeBroadphase extends Broadphase {\r\n\r\n    }\r\n\r\n    export class Narrowphase {\r\n\r\n        contactEquations: ContactEquation[];\r\n        frictionEquations: FrictionEquation[];\r\n        enableFriction: boolean;\r\n        enableEquations: boolean;\r\n        slipForce: number;\r\n        frictionCoefficient: number;\r\n        surfaceVelocity: number;\r\n        reuseObjects: boolean;\r\n        resuableContactEquations: any[];\r\n        reusableFrictionEquations: any[];\r\n        restitution: number;\r\n        stiffness: number;\r\n        relaxation: number;\r\n        frictionStiffness: number;\r\n        frictionRelaxation: number;\r\n        enableFrictionReduction: boolean;\r\n        contactSkinSize: number;\r\n\r\n        collidedLastStep(bodyA: Body, bodyB: Body): boolean;\r\n        reset(): void;\r\n        createContactEquation(bodyA: Body, bodyB: Body, shapeA: Shape, shapeB: Shape): ContactEquation;\r\n        createFrictionFromContact(c: ContactEquation): FrictionEquation;\r\n\r\n    }\r\n\r\n    export class SAPBroadphase extends Broadphase {\r\n\r\n        axisList: Body[];\r\n        axisIndex: number;\r\n\r\n    }\r\n\r\n    export class Constraint {\r\n\r\n        static DISTANCE: number;\r\n        static GEAR: number;\r\n        static LOCK: number;\r\n        static PRISMATIC: number;\r\n        static REVOLUTE: number;\r\n\r\n        constructor(bodyA: Body, bodyB: Body, type: number, options?: {\r\n            collideConnected?: boolean;\r\n            wakeUpBodies?: boolean;\r\n        });\r\n\r\n        type: number;\r\n        equeations: Equation[];\r\n        bodyA: Body;\r\n        bodyB: Body;\r\n        collideConnected: boolean;\r\n\r\n        update(): void;\r\n        setStiffness(stiffness: number): void;\r\n        setRelaxation(relaxation: number): void;\r\n\r\n    }\r\n\r\n    export class DistanceConstraint extends Constraint {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, type: number, options?: {\r\n            collideConnected?: boolean;\r\n            wakeUpBodies?: boolean;\r\n            distance?: number;\r\n            localAnchorA?: number[];\r\n            localAnchorB?: number[];\r\n            maxForce?: number;\r\n        });\r\n\r\n        localAnchorA: number[];\r\n        localAnchorB: number[];\r\n        distance: number;\r\n        maxForce: number;\r\n        upperLimitEnabled: boolean;\r\n        upperLimit: number;\r\n        lowerLimitEnabled: boolean;\r\n        lowerLimit: number;\r\n        position: number;\r\n\r\n        setMaxForce(f: number): void;\r\n        getMaxForce(): number;\r\n\r\n    }\r\n\r\n    export class GearConstraint extends Constraint {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, type: number, options?: {\r\n            collideConnected?: boolean;\r\n            wakeUpBodies?: boolean;\r\n            angle?: number;\r\n            ratio?: number;\r\n            maxTorque?: number;\r\n        });\r\n\r\n        ratio: number;\r\n        angle: number;\r\n\r\n        setMaxTorque(torque: number): void;\r\n        getMaxTorque(): number;\r\n\r\n    }\r\n\r\n    export class LockConstraint extends Constraint {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, type: number, options?: {\r\n            collideConnected?: boolean;\r\n            wakeUpBodies?: boolean;\r\n            localOffsetB?: number[];\r\n            localAngleB?: number;\r\n            maxForce?: number;\r\n        });\r\n\r\n        setMaxForce(force: number): void;\r\n        getMaxForce(): number;\r\n\r\n    }\r\n\r\n    export class PrismaticConstraint extends Constraint {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, type: number, options?: {\r\n            collideConnected?: boolean;\r\n            wakeUpBodies?: boolean;\r\n            maxForce?: number;\r\n            localAnchorA?: number[];\r\n            localAnchorB?: number[];\r\n            localAxisA?: number[];\r\n            disableRotationalLock?: boolean;\r\n            upperLimit?: number;\r\n            lowerLimit?: number;\r\n        });\r\n\r\n        localAnchorA: number[];\r\n        localAnchorB: number[];\r\n        localAxisA: number[];\r\n        position: number;\r\n        velocity: number;\r\n        lowerLimitEnabled: boolean;\r\n        upperLimitEnabled: boolean;\r\n        lowerLimit: number;\r\n        upperLimit: number;\r\n        upperLimitEquation: ContactEquation;\r\n        lowerLimitEquation: ContactEquation;\r\n        motorEquation: Equation;\r\n        motorEnabled: boolean;\r\n        motorSpeed: number;\r\n\r\n        enableMotor(): void;\r\n        disableMotor(): void;\r\n        setLimits(lower: number, upper: number): void;\r\n\r\n    }\r\n\r\n    export class RevoluteConstraint extends Constraint {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, type: number, options?: {\r\n            collideConnected?: boolean;\r\n            wakeUpBodies?: boolean;\r\n            worldPivot?: number[];\r\n            localPivotA?: number[];\r\n            localPivotB?: number[];\r\n            maxForce?: number;\r\n        });\r\n\r\n        pivotA: number[];\r\n        pivotB: number[];\r\n        motorEquation: RotationalVelocityEquation;\r\n        motorEnabled: boolean;\r\n        angle: number;\r\n        lowerLimitEnabled: boolean;\r\n        upperLimitEnabled: boolean;\r\n        lowerLimit: number;\r\n        upperLimit: number;\r\n        upperLimitEquation: ContactEquation;\r\n        lowerLimitEquation: ContactEquation;\r\n\r\n        enableMotor(): void;\r\n        disableMotor(): void;\r\n        motorIsEnabled(): boolean;\r\n        setLimits(lower: number, upper: number): void;\r\n        setMotorSpeed(speed: number): void;\r\n        getMotorSpeed(): number;\r\n\r\n    }\r\n\r\n    export class AngleLockEquation extends Equation {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, options?: {\r\n            angle?: number;\r\n            ratio?: number;\r\n        });\r\n\r\n        computeGq(): number;\r\n        setRatio(ratio: number): number;\r\n        setMaxTorque(torque: number): number;\r\n\r\n    }\r\n\r\n    export class ContactEquation extends Equation {\r\n\r\n        constructor(bodyA: Body, bodyB: Body);\r\n\r\n        contactPointA: number[];\r\n        penetrationVec: number[];\r\n        contactPointB: number[];\r\n        normalA: number[];\r\n        restitution: number;\r\n        firstImpact: boolean;\r\n        shapeA: Shape;\r\n        shapeB: Shape;\r\n\r\n        computeB(a: number, b: number, h: number): number;\r\n\r\n    }\r\n\r\n    export class Equation {\r\n\r\n        static DEFAULT_STIFFNESS: number;\r\n        static DEFAULT_RELAXATION: number;\r\n\r\n        constructor(bodyA: Body, bodyB: Body, minForce?: number, maxForce?: number);\r\n\r\n        minForce: number;\r\n        maxForce: number;\r\n        bodyA: Body;\r\n        bodyB: Body;\r\n        stiffness: number;\r\n        relaxation: number;\r\n        G: number[];\r\n        offset: number;\r\n        a: number;\r\n        b: number;\r\n        epsilon: number;\r\n        timeStep: number;\r\n        needsUpdate: boolean;\r\n        multiplier: number;\r\n        relativeVelocity: number;\r\n        enabled: boolean;\r\n\r\n        gmult(G: number[], vi: number[], wi: number[], vj: number[], wj: number[]): number;\r\n        computeB(a: number, b: number, h: number): number;\r\n        computeGq(): number;\r\n        computeGW(): number;\r\n        computeGWlambda(): number;\r\n        computeGiMf(): number;\r\n        computeGiMGt(): number;\r\n        addToWlambda(deltalambda: number): number;\r\n        computeInvC(eps: number): number;\r\n\r\n    }\r\n\r\n    export class FrictionEquation extends Equation {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, slipForce: number);\r\n\r\n        contactPointA: number[];\r\n        contactPointB: number[];\r\n        t: number[];\r\n        shapeA: Shape;\r\n        shapeB: Shape;\r\n        frictionCoefficient: number;\r\n\r\n        setSlipForce(slipForce: number): number;\r\n        getSlipForce(): number;\r\n        computeB(a: number, b: number, h: number): number;\r\n\r\n    }\r\n\r\n    export class RotationalLockEquation extends Equation {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, options?: {\r\n            angle?: number;\r\n        });\r\n\r\n        angle: number;\r\n\r\n        computeGq(): number;\r\n\r\n    }\r\n\r\n    export class RotationalVelocityEquation extends Equation {\r\n\r\n        constructor(bodyA: Body, bodyB: Body);\r\n\r\n        computeB(a: number, b: number, h: number): number;\r\n\r\n    }\r\n\r\n    export class EventEmitter {\r\n\r\n        on(type: string, listener: Function, context: any): EventEmitter;\r\n        has(type: string, listener: Function): boolean;\r\n        off(type: string, listener: Function): EventEmitter;\r\n        emit(event: any): EventEmitter;\r\n\r\n    }\r\n\r\n    export class ContactMaterialOptions {\r\n\r\n        friction: number;\r\n        restitution: number;\r\n        stiffness: number;\r\n        relaxation: number;\r\n        frictionStiffness: number;\r\n        frictionRelaxation: number;\r\n        surfaceVelocity: number;\r\n\r\n    }\r\n\r\n    export class ContactMaterial {\r\n\r\n        static idCounter: number;\r\n\r\n        constructor(materialA: Material, materialB: Material, options?: ContactMaterialOptions);\r\n\r\n        id: number;\r\n        materialA: Material;\r\n        materialB: Material;\r\n        friction: number;\r\n        restitution: number;\r\n        stiffness: number;\r\n        relaxation: number;\r\n        frictionStuffness: number;\r\n        frictionRelaxation: number;\r\n        surfaceVelocity: number;\r\n        contactSkinSize: number;\r\n\r\n    }\r\n\r\n    export class Material {\r\n\r\n        static idCounter: number;\r\n\r\n        constructor(id: number);\r\n\r\n        id: number;\r\n\r\n    }\r\n\r\n    export class vec2 {\r\n\r\n        static crossLength(a: number[], b: number[]): number;\r\n        static crossVZ(out: number[], vec: number[], zcomp: number): number;\r\n        static crossZV(out: number[], zcomp: number, vec: number[]): number;\r\n        static rotate(out: number[], a: number[], angle: number): void;\r\n        static rotate90cw(out: number[], a: number[]): number;\r\n        static centroid(out: number[], a: number[], b: number[], c: number[]): number[];\r\n        static create(): number[];\r\n        static clone(a: number[]): number[];\r\n        static fromValues(x: number, y: number): number[];\r\n        static copy(out: number[], a: number[]): number[];\r\n        static set(out: number[], x: number, y: number): number[];\r\n        static toLocalFrame(out: number[], worldPoint: number[], framePosition: number[], frameAngle: number): void;\r\n        static toGlobalFrame(out: number[], localPoint: number[], framePosition: number[], frameAngle: number): void;\r\n        static add(out: number[], a: number[], b: number[]): number[];\r\n        static subtract(out: number[], a: number[], b: number[]): number[];\r\n        static sub(out: number[], a: number[], b: number[]): number[];\r\n        static multiply(out: number[], a: number[], b: number[]): number[];\r\n        static mul(out: number[], a: number[], b: number[]): number[];\r\n        static divide(out: number[], a: number[], b: number[]): number[];\r\n        static div(out: number[], a: number[], b: number[]): number[];\r\n        static scale(out: number[], a: number[], b: number): number[];\r\n        static distance(a: number[], b: number[]): number;\r\n        static dist(a: number[], b: number[]): number;\r\n        static squaredDistance(a: number[], b: number[]): number;\r\n        static sqrDist(a: number[], b: number[]): number;\r\n        static length(a: number[]): number;\r\n        static len(a: number[]): number;\r\n        static squaredLength(a: number[]): number;\r\n        static sqrLen(a: number[]): number;\r\n        static negate(out: number[], a: number[]): number[];\r\n        static normalize(out: number[], a: number[]): number[];\r\n        static dot(a: number[], b: number[]): number;\r\n        static str(a: number[]): string;\r\n\r\n    }\r\n\r\n    export interface BodyOptions {\r\n\r\n        mass?: number;\r\n        position?: number[];\r\n        velocity?: number[];\r\n        angle?: number;\r\n        angularVelocity?: number;\r\n        force?: number[];\r\n        angularForce?: number;\r\n        fixedRotation?: boolean;\r\n\r\n    }\r\n\r\n    export class Body extends EventEmitter {\r\n\r\n        sleepyEvent: {\r\n            type: string;\r\n        };\r\n\r\n        sleepEvent: {\r\n            type: string;\r\n        };\r\n\r\n        wakeUpEvent: {\r\n            type: string;\r\n        };\r\n\r\n        static DYNAMIC: number;\r\n        static STATIC: number;\r\n        static KINEMATIC: number;\r\n        static AWAKE: number;\r\n        static SLEEPY: number;\r\n        static SLEEPING: number;\r\n\r\n        constructor(options?: BodyOptions);\r\n\r\n        id: number;\r\n        world: World;\r\n        shapes: Shape[];\r\n        mass: number;\r\n        invMass: number;\r\n        inertia: number;\r\n        invInertia: number;\r\n        invMassSolve: number;\r\n        invInertiaSolve: number;\r\n        fixedRotation: number;\r\n        position: number[];\r\n        interpolatedPosition: number[];\r\n        interpolatedAngle: number;\r\n        previousPosition: number[];\r\n        previousAngle: number;\r\n        velocity: number[];\r\n        vlambda: number[];\r\n        wlambda: number[];\r\n        angle: number;\r\n        angularVelocity: number;\r\n        force: number[];\r\n        angularForce: number;\r\n        damping: number;\r\n        angularDamping: number;\r\n        type: number;\r\n        boundingRadius: number;\r\n        aabb: AABB;\r\n        aabbNeedsUpdate: boolean;\r\n        allowSleep: boolean;\r\n        wantsToSleep: boolean;\r\n        sleepState: number;\r\n        sleepSpeedLimit: number;\r\n        sleepTimeLimit: number;\r\n        gravityScale: number;\r\n        collisionResponse: boolean;\r\n\r\n        updateSolveMassProperties(): void;\r\n        setDensity(density: number): void;\r\n        getArea(): number;\r\n        getAABB(): AABB;\r\n        updateAABB(): void;\r\n        updateBoundingRadius(): void;\r\n        addShape(shape: Shape, offset?: number[], angle?: number): void;\r\n        removeShape(shape: Shape): boolean;\r\n        updateMassProperties(): void;\r\n        applyForce(force: number[], worldPoint: number[]): void;\r\n        toLocalFrame(out: number[], worldPoint: number[]): void;\r\n        toWorldFrame(out: number[], localPoint: number[]): void;\r\n        fromPolygon(path: number[][], options?: {\r\n            optimalDecomp?: boolean;\r\n            skipSimpleCheck?: boolean;\r\n            removeCollinearPoints?: any; //boolean | number\r\n        }): boolean;\r\n        adjustCenterOfMass(): void;\r\n        setZeroForce(): void;\r\n        resetConstraintVelocity(): void;\r\n        applyDamping(dy: number): void;\r\n        wakeUp(): void;\r\n        sleep(): void;\r\n        sleepTick(time: number, dontSleep: boolean, dt: number): void;\r\n        getVelocityFromPosition(story: number[], dt: number): number[];\r\n        getAngularVelocityFromPosition(timeStep: number): number;\r\n        overlaps(body: Body): boolean;\r\n\r\n    }\r\n\r\n    export class Spring {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, options?: {\r\n\r\n            stiffness?: number;\r\n            damping?: number;\r\n            localAnchorA?: number[];\r\n            localAnchorB?: number[];\r\n            worldAnchorA?: number[];\r\n            worldAnchorB?: number[];\r\n\r\n        });\r\n\r\n        stiffness: number;\r\n        damping: number;\r\n        bodyA: Body;\r\n        bodyB: Body;\r\n\r\n        applyForce(): void;\r\n\r\n    }\r\n\r\n    export class LinearSpring extends Spring {\r\n\r\n        localAnchorA: number[];\r\n        localAnchorB: number[];\r\n        restLength: number;\r\n\r\n        setWorldAnchorA(worldAnchorA: number[]): void;\r\n        setWorldAnchorB(worldAnchorB: number[]): void;\r\n        getWorldAnchorA(result: number[]): number[];\r\n        getWorldAnchorB(result: number[]): number[];\r\n        applyForce(): void;\r\n\r\n    }\r\n\r\n    export class RotationalSpring extends Spring {\r\n\r\n        constructor(bodyA: Body, bodyB: Body, options?: {\r\n            restAngle?: number;\r\n            stiffness?: number;\r\n            damping?: number;\r\n        });\r\n\r\n        restAngle: number;\r\n\r\n    }\r\n\r\n    export interface CapsuleOptions extends SharedShapeOptions {\r\n\r\n      length?: number;\r\n      radius?: number;\r\n\r\n    }\r\n\r\n    export class Capsule extends Shape {\r\n\r\n        constructor(options?: CapsuleOptions);\r\n\r\n        length: number;\r\n        radius: number;\r\n\r\n    }\r\n\r\n    export interface CircleOptions extends SharedShapeOptions {\r\n\r\n      radius?: number;\r\n\r\n    }\r\n\r\n    export class Circle extends Shape {\r\n\r\n        constructor(options?: CircleOptions);\r\n\r\n        radius: number;\r\n\r\n    }\r\n\r\n    export interface ConvexOptions extends SharedShapeOptions {\r\n\r\n      length?: number;\r\n      radius?: number;\r\n\r\n    }\r\n\r\n    export class Convex extends Shape {\r\n\r\n        static triangleArea(a: number[], b: number[], c: number[]): number;\r\n\r\n        constructor(options?: ConvexOptions);\r\n\r\n        vertices: number[][];\r\n        axes: number[];\r\n        centerOfMass: number[];\r\n        triangles: number[];\r\n        boundingRadius: number;\r\n\r\n        projectOntoLocalAxis(localAxis: number[], result: number[]): void;\r\n        projectOntoWorldAxis(localAxis: number[], shapeOffset: number[], shapeAngle: number, result: number[]): void;\r\n\r\n        updateCenterOfMass(): void;\r\n\r\n    }\r\n\r\n    export interface HeightfieldOptions extends SharedShapeOptions {\r\n\r\n        heights?: number[];\r\n        minValue?: number;\r\n        maxValue?: number;\r\n        elementWidth?: number;\r\n\r\n    }\r\n\r\n    export class Heightfield extends Shape {\r\n\r\n        constructor(options?: HeightfieldOptions);\r\n\r\n        data: number[];\r\n        maxValue: number;\r\n        minValue: number;\r\n        elementWidth: number;\r\n\r\n    }\r\n\r\n    export interface SharedShapeOptions {\r\n\r\n        position?: number[];\r\n        angle?: number;\r\n        collisionGroup?: number;\r\n        collisionResponse?: boolean;\r\n        collisionMask?: number;\r\n        sensor?: boolean;\r\n\r\n    }\r\n\r\n    export interface ShapeOptions extends SharedShapeOptions {\r\n\r\n        type?: number;\r\n\r\n    }\r\n\r\n    export class Shape {\r\n\r\n        static idCounter: number;\r\n        static CIRCLE: number;\r\n        static PARTICLE: number;\r\n        static PLANE: number;\r\n        static CONVEX: number;\r\n        static LINE: number;\r\n        static BOX: number;\r\n        static CAPSULE: number;\r\n        static HEIGHTFIELD: number;\r\n\r\n        constructor(options?: ShapeOptions);\r\n\r\n        type: number;\r\n        id: number;\r\n        position: number[];\r\n        angle: number;\r\n        boundingRadius: number;\r\n        collisionGroup: number;\r\n        collisionResponse: boolean;\r\n        collisionMask: number;\r\n        material: Material;\r\n        area: number;\r\n        sensor: boolean;\r\n\r\n        computeMomentOfInertia(mass: number): number;\r\n        updateBoundingRadius(): number;\r\n        updateArea(): void;\r\n        computeAABB(out: AABB, position: number[], angle: number): void;\r\n\r\n    }\r\n\r\n    export interface LineOptions extends SharedShapeOptions {\r\n\r\n      length?: number;\r\n\r\n    }\r\n\r\n    export class Line extends Shape {\r\n\r\n        constructor(options?: LineOptions);\r\n\r\n        length: number;\r\n\r\n    }\r\n\r\n    export class Particle extends Shape {\r\n\r\n        constructor(options?: SharedShapeOptions);\r\n\r\n    }\r\n\r\n    export class Plane extends Shape {\r\n\r\n        constructor(options?: SharedShapeOptions);\r\n\r\n    }\r\n\r\n    export interface BoxOptions {\r\n\r\n      width?: number;\r\n      height?: number;\r\n\r\n    }\r\n\r\n    export class Box extends Shape {\r\n\r\n        constructor(options?: BoxOptions);\r\n\r\n        width: number;\r\n        height: number;\r\n\r\n    }\r\n\r\n    export class Solver extends EventEmitter {\r\n\r\n        static GS: number;\r\n        static ISLAND: number;\r\n\r\n        constructor(options?: {}, type?: number);\r\n\r\n        type: number;\r\n        equations: Equation[];\r\n        equationSortFunction: Equation; //Equation | boolean\r\n\r\n        solve(dy: number, world: World): void;\r\n        solveIsland(dy: number, island: Island): void;\r\n        sortEquations(): void;\r\n        addEquation(eq: Equation): void;\r\n        addEquations(eqs: Equation[]): void;\r\n        removeEquation(eq: Equation): void;\r\n        removeAllEquations(): void;\r\n\r\n    }\r\n\r\n    export class GSSolver extends Solver {\r\n\r\n        constructor(options?: {\r\n            iterations?: number;\r\n            tolerance?: number;\r\n        });\r\n\r\n        iterations: number;\r\n        tolerance: number;\r\n        useZeroRHS: boolean;\r\n        frictionIterations: number;\r\n        usedIterations: number;\r\n\r\n        solve(h: number, world: World): void;\r\n\r\n    }\r\n\r\n    export class OverlapKeeper {\r\n\r\n        constructor(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape);\r\n\r\n        shapeA: Shape;\r\n        shapeB: Shape;\r\n        bodyA: Body;\r\n        bodyB: Body;\r\n\r\n        tick(): void;\r\n        setOverlapping(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Body): void;\r\n        bodiesAreOverlapping(bodyA: Body, bodyB: Body): boolean;\r\n        set(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape): void;\r\n\r\n    }\r\n\r\n    export class TupleDictionary {\r\n\r\n        data: number[];\r\n        keys: number[];\r\n\r\n        getKey(id1: number, id2: number): string;\r\n        getByKey(key: number): number;\r\n        get(i: number, j: number): number;\r\n        set(i: number, j: number, value: number): number;\r\n        reset(): void;\r\n        copy(dict: TupleDictionary): void;\r\n\r\n    }\r\n\r\n    export class Utils {\r\n\r\n        static appendArray<T>(a: Array<T>, b: Array<T>): Array<T>;\r\n        static splice<T>(array: Array<T>, index: number, howMany: number): void;\r\n        static extend(a: any, b: any): void;\r\n        static defaults(options: any, defaults: any): any;\r\n\r\n    }\r\n\r\n    export class Island {\r\n\r\n        equations: Equation[];\r\n        bodies: Body[];\r\n\r\n        reset(): void;\r\n        getBodies(result: any): Body[];\r\n        wantsToSleep(): boolean;\r\n        sleep(): boolean;\r\n\r\n    }\r\n\r\n    export class IslandManager extends Solver {\r\n\r\n        static getUnvisitedNode(nodes: IslandNode[]): IslandNode; // IslandNode | boolean\r\n\r\n        equations: Equation[];\r\n        islands: Island[];\r\n        nodes: IslandNode[];\r\n\r\n        visit(node: IslandNode, bds: Body[], eqs: Equation[]): void;\r\n        bfs(root: IslandNode, bds: Body[], eqs: Equation[]): void;\r\n        split(world: World): Island[];\r\n\r\n    }\r\n\r\n    export class IslandNode {\r\n\r\n        constructor(body: Body);\r\n\r\n        body: Body;\r\n        neighbors: IslandNode[];\r\n        equations: Equation[];\r\n        visited: boolean;\r\n\r\n        reset(): void;\r\n\r\n    }\r\n\r\n    export class World extends EventEmitter {\r\n\r\n        postStepEvent: {\r\n            type: string;\r\n        };\r\n\r\n        addBodyEvent: {\r\n            type: string;\r\n        };\r\n\r\n        removeBodyEvent: {\r\n            type: string;\r\n        };\r\n\r\n        addSpringEvent: {\r\n            type: string;\r\n        };\r\n\r\n        impactEvent: {\r\n            type: string;\r\n            bodyA: Body;\r\n            bodyB: Body;\r\n            shapeA: Shape;\r\n            shapeB: Shape;\r\n            contactEquation: ContactEquation;\r\n        };\r\n\r\n        postBroadphaseEvent: {\r\n            type: string;\r\n            pairs: Body[];\r\n        };\r\n\r\n        beginContactEvent: {\r\n            type: string;\r\n            shapeA: Shape;\r\n            shapeB: Shape;\r\n            bodyA: Body;\r\n            bodyB: Body;\r\n            contactEquations: ContactEquation[];\r\n        };\r\n\r\n        endContactEvent: {\r\n            type: string;\r\n            shapeA: Shape;\r\n            shapeB: Shape;\r\n            bodyA: Body;\r\n            bodyB: Body;\r\n        };\r\n\r\n        preSolveEvent: {\r\n            type: string;\r\n            contactEquations: ContactEquation[];\r\n            frictionEquations: FrictionEquation[];\r\n        };\r\n\r\n        static NO_SLEEPING: number;\r\n        static BODY_SLEEPING: number;\r\n        static ISLAND_SLEEPING: number;\r\n\r\n        static integrateBody(body: Body, dy: number): void;\r\n\r\n        constructor(options?: {\r\n            solver?: Solver;\r\n            gravity?: number[];\r\n            broadphase?: Broadphase;\r\n            islandSplit?: boolean;\r\n            doProfiling?: boolean;\r\n        });\r\n\r\n        springs: Spring[];\r\n        bodies: Body[];\r\n        solver: Solver;\r\n        narrowphase: Narrowphase;\r\n        islandManager: IslandManager;\r\n        gravity: number[];\r\n        frictionGravity: number;\r\n        useWorldGravityAsFrictionGravity: boolean;\r\n        useFrictionGravityOnZeroGravity: boolean;\r\n        doProfiling: boolean;\r\n        lastStepTime: number;\r\n        broadphase: Broadphase;\r\n        constraints: Constraint[];\r\n        defaultMaterial: Material;\r\n        defaultContactMaterial: ContactMaterial;\r\n        lastTimeStep: number;\r\n        applySpringForces: boolean;\r\n        applyDamping: boolean;\r\n        applyGravity: boolean;\r\n        solveConstraints: boolean;\r\n        contactMaterials: ContactMaterial[];\r\n        time: number;\r\n        stepping: boolean;\r\n        islandSplit: boolean;\r\n        emitImpactEvent: boolean;\r\n        sleepMode: number;\r\n\r\n        addConstraint(c: Constraint): void;\r\n        addContactMaterial(contactMaterial: ContactMaterial): void;\r\n        removeContactMaterial(cm: ContactMaterial): void;\r\n        getContactMaterial(materialA: Material, materialB: Material): ContactMaterial; // ContactMaterial | boolean\r\n        removeConstraint(c: Constraint): void;\r\n        step(dy: number, timeSinceLastCalled?: number, maxSubSteps?: number): void;\r\n        runNarrowphase(np: Narrowphase, bi: Body, si: Shape, xi: any[], ai: number, bj: Body, sj: Shape, xj: any[], aj: number, cm: number, glen: number): void;\r\n        addSpring(s: Spring): void;\r\n        removeSpring(s: Spring): void;\r\n        addBody(body: Body): void;\r\n        removeBody(body: Body): void;\r\n        getBodyByID(id: number): Body; //Body | boolean\r\n        disableBodyCollision(bodyA: Body, bodyB: Body): void;\r\n        enableBodyCollision(bodyA: Body, bodyB: Body): void;\r\n        clear(): void;\r\n        clone(): World;\r\n        hitTest(worldPoint: number[], bodies: Body[], precision: number): Body[];\r\n        setGlobalEquationParameters(parameters: {\r\n            relaxation?: number;\r\n            stiffness?: number;\r\n        }): void;\r\n        setGlobalStiffness(stiffness: number): void;\r\n        setGlobalRelaxation(relaxation: number): void;\r\n    }\r\n\r\n}\r\n",
});
SupCore.system.registerPlugin("typescriptAPI", "P2Body", {
    code: "namespace Sup {\r\n  export namespace P2 {\r\n    export function getWorld() { return SupEngine.P2.World; }\r\n    export function resetWorld() { SupEngine.P2.World = new window.p2.World(); }\r\n    export function getWorldAutoUpdate() { return SupEngine.P2.autoUpdate; }\r\n    export function setWorldAutoUpdate(autoUpdate) { SupEngine.P2.autoUpdate = autoUpdate; }\r\n\r\n    export class Body extends ActorComponent {\r\n      body: any;\r\n\r\n      constructor( actor, options ) {\r\n        super( actor );\r\n        this.__inner = new SupEngine.componentClasses.P2Body(actor.__inner);\r\n        if (options != null) this.__inner.setup(options);\r\n        this.__inner.__outer = this;\r\n        this.body = this.__inner.body;\r\n        this.actor.p2Body = this;\r\n      }\r\n      destroy() {\r\n        this.body = null;\r\n        this.actor.p2Body = null;\r\n        super.destroy();\r\n      }\r\n    }\r\n  }\r\n}\r\n",
    defs: "declare namespace Sup {\r\n  namespace P2 {\r\n    function getWorld(): p2.World;\r\n    function resetWorld();\r\n    function getWorldAutoUpdate(): boolean;\r\n    function setWorldAutoUpdate(autoUpdate: boolean);\r\n\r\n    class Body extends ActorComponent {\r\n      body: p2.Body;\r\n\r\n      constructor(actor: Sup.Actor, options: any);\r\n    }\r\n  }\r\n}\r\n",
    exposeActorComponent: { propertyName: "p2Body", className: "Sup.P2.Body" }
});

},{}]},{},[1]);
