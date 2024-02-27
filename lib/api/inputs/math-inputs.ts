/* eslint-disable @typescript-eslint/no-namespace */


// tslint:disable-next-line: no-namespace
export namespace Math {

    export enum mathTwoNrOperatorEnum {
        add = "add",
        subtract = "subtract",
        multiply = "multiply",
        divide = "divide",
        power = "power",
        modulus = "modulus",
    }

    export enum mathOneNrOperatorEnum {
        absolute = "absolute",
        negate = "negate",
        ln = "ln",
        log10 = "log10",
        tenPow = "tenPow",
        round = "round",
        floor = "floor",
        ceil = "ceil",
        sqrt = "sqrt",
        sin = "sin",
        cos = "cos",
        tan = "tan",
        asin = "asin",
        acos = "acos",
        atan = "atan",
        log = "log",
        exp = "exp",
        radToDeg = "radToDeg",
        degToRad = "degToRad",
    }

    export class NumberDto {
        constructor(number?: number) {
            if (number !== undefined) { this.number = number; }
        }
        /**
         * First number
         * @default 0
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        number = 0;
    }
    export class ModulusDto {
        constructor(number?: number, modulus?: number) {
            if (number !== undefined) { this.number = number; }
            if (modulus !== undefined) { this.modulus = modulus; }
        }
        /**
         * Number
         * @default 1
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        number = 1;
        /**
         * Modulus
         * @default 1
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        modulus = 2;
    }
    export class RoundToDecimalsDto{
        constructor(number?: number, decimalPlaces?: number) {
            if (number !== undefined) { this.number = number; }
            if (decimalPlaces !== undefined) { this.decimalPlaces = decimalPlaces; }
        }
        /**
         * Number to round
         * @default 1.123456
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        number = 1.123456;
        /**
         * Number of decimal places
         * @default 2
         * @minimum -Infinity
         * @maximum Infinity
         * @step 1
         */
        decimalPlaces = 2;
    }
    export class ActionOnTwoNumbersDto {
        constructor(first?: number, second?: number, operation?: mathTwoNrOperatorEnum) {
            if (first !== undefined) { this.first = first; }
            if (second !== undefined) { this.second = second; }
            if (operation !== undefined) { this.operation = operation; }
        }
        /**
         * First number
         * @default 1
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        first = 1;
        /**
         * Second number
         * @default 1
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        second = 1;
        /**
         * Point
         * @default add
         */
        operation: mathTwoNrOperatorEnum;
    }
    export class ActionOnOneNumberDto {
        constructor(number?: number, operation?: mathOneNrOperatorEnum) {
            if (number !== undefined) { this.number = number; }
            if (operation !== undefined) { this.operation = operation; }
        }
        /**
         * First number
         * @default 1
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        number = 1;
        /**
         * Point
         * @default absolute
         */
        operation: mathOneNrOperatorEnum;
    }
    export class RemapNumberDto {
        constructor(number?: number, fromLow?: number, fromHigh?: number, toLow?: number, toHigh?: number) {
            if (number !== undefined) { this.number = number; }
            if (fromLow !== undefined) { this.fromLow = fromLow; }
            if (fromHigh !== undefined) { this.fromHigh = fromHigh; }
            if (toLow !== undefined) { this.toLow = toLow; }
            if (toHigh !== undefined) { this.toHigh = toHigh; }
        }
        /**
         * Number to remap
         * @default 0.5
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        number = 0.5;
        /**
         * First number range min
         * @default 0
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        fromLow = 0;
        /**
        * Map to range min
        * @default 1
        * @minimum -Infinity
        * @maximum Infinity
        * @step 0.1
        */
        fromHigh = 1;
        /**
         * First number range max
         * @default 1
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        toLow = 1;
        /**
         * Map to range max
         * @default 2
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        toHigh = 2;
    }
    export class RandomNumberDto {
        constructor(low?: number, high?: number) {
            if (low !== undefined) { this.low = low; }
            if (high !== undefined) { this.high = high; }
        }
        /**
         * Low range of random value
         * @default 0
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        low = 0;
        /**
         * High range of random value
         * @default 1
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        high = 1;
    }

    export class RandomNumbersDto {
        constructor(low?: number, high?: number, count?: number) {
            if (low !== undefined) { this.low = low; }
            if (high !== undefined) { this.high = high; }
            if (count !== undefined) { this.count = count; }
        }
        /**
         * Low range of random value
         * @default 0
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        low = 0;
        /**
         * High range of random value
         * @default 1
         * @minimum -Infinity
         * @maximum Infinity
         * @step 0.1
         */
        high = 1;
        /**
         * Number of produced random values
         * @default 10
         * @minimum -Infinity
         * @maximum Infinity
         * @step 1
         */
        count = 10;
    }
}
