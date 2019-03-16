import { Injectable } from '@angular/core';
import * as esprima from 'esprima';
import * as _ from 'lodash';

const operationType = ['BinaryExpression'];

@Injectable({
    providedIn: 'root'
})
export class AstService {
    private ansewer

    public parseAst(expression) {
        const tree = esprima.parseScript(expression);
        const testAnswer = this.testEval(tree.body[0].expression);
        console.log(testAnswer);
        return testAnswer
    }

    private testEval(node, x = 5) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            console.log(node);
            if (node.type === 'Identifier') {
                return Number(node.value = x);
            }
            return Number(node.value);
        }
        const leftAnswer = this.testEval(node.left);
        const rightAnswer = this.testEval(node.right);
        if (_.includes(['+', '-', '*', '/'], node.operator)) {
            console.log(rightAnswer)
            return eval(`${leftAnswer}${node.operator}${rightAnswer}`);
        }
    }

    constructor() { }
}
