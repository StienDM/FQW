import { Injectable } from '@angular/core';
import * as esprima from 'esprima';
import * as _ from 'lodash';

const operationType = ['BinaryExpression'];

@Injectable({
    providedIn: 'root'
})
export class AstService {
    private ansewer

    public parseAst(expression, x) {
        const tree = esprima.parseScript(expression);
        if (!(tree.body[0].expression.type === 'CallExpression')) {
            
        }
        const testAnswer = this.evaluate(tree.body[0].expression, x);
        console.log(testAnswer);
        return testAnswer
    }

    private evaluate(node, x = 5) {
        if (!node) {
            return;
        }

        console.log(node);

        if (node.type === 'CallExpression') {
            console.log(123);
            return this.getEvaluateCall(node, x);
        }
        // if (node.type === 'CallExpression') {
        //     if (!node.arguments[0].left && !node.arguments[0].right) {
        //         console.log(node.arguments[0]);
        //         if (node.arguments[0].type === 'Identifier') {
        //             console.log(node.arguments[0].operator);
        //             return Number(node.arguments[0].value = x);
        //         }
    
        //         return Number(node.arguments[0].value);
        //     }
        // }

        if (
            !node.left
            && !node.right
        ) {
            if (node.type === 'Identifier') {
                return Number(node.value = x);
            }
            return Number(node.value);
        }
        console.log('wat');
        const leftAnswer = this.evaluate(node.left);
        const rightAnswer = this.evaluate(node.right);
        const evaluatedArguments = this.getEvaluate.bind(this, node)(leftAnswer, rightAnswer);
        // const evaluatedCall = this.getEvaluateCall.bind(this, node)(evaluatedArguments);
        // return evaluatedCall;
        return evaluatedArguments;
    }

    private getEvaluate(node, leftAnswer, rightAnswer) {
        if (node.operator) {
            switch (node.operator) {
                case '+':
                    return leftAnswer + rightAnswer;
                case '-':
                    return leftAnswer - rightAnswer;
                case '*':
                    return leftAnswer * rightAnswer;
                case '/':
                    return leftAnswer / rightAnswer;
                case '^':
                    return Math.pow(leftAnswer, rightAnswer);
            }         
        }
    }

    private getEvalFunctions(node, evaluatedArguments) {
        console.log(node);
        switch(node.callee.name) {
            case 'sin': 
                return Math.sin(evaluatedArguments);
            case 'cos':
                return Math.cos(evaluatedArguments);
            case 'tan':
                return Math.tan(evaluatedArguments);
            case 'ctg':
                return 1 / Math.tan(evaluatedArguments);
        }
    }

    private getTested(node, x) {

    }

    private getEvaluateCall(node, x) {
        if (!node.arguments[0]) {
            return;
        }

        if (
            !node.arguments[0].left
            && !node.arguments[0].right
        ) {
            if (node.arguments[0].type === 'Identifier') {
                return Number(node.arguments[0].value = x);
            }
            return Number(node.arguments[0].value);
        }

        const leftAnswer = this.evaluate(node.arguments[0].left);
        const rightAnswer = this.evaluate(node.arguments[0].right);
        const evaluatedArguments = this.getEvaluate.bind(this, node.arguments[0])(leftAnswer, rightAnswer);
        console.log('getEvaluateCall', evaluatedArguments);
        const evalFunctions = this.getEvalFunctions.bind(this, node)(evaluatedArguments);
        return evalFunctions;
    }

    constructor() { }
}
