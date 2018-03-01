// Объявление класса
class ClassDeclaration {
    constructor() {
        console.log('ClassDeclaration');
    }
}

class ClassDeclarationExtend extends ClassDeclaration {
    constructor() {
        super()
        console.log('ClassDeclarationExtend');
    }
}

console.log(new ClassDeclaration());
console.log(new ClassDeclarationExtend());

// Выражение класса
const ClassExpression = class {
    constructor() {
        console.log('ClassExpression');
    }
};

const ClassExpressionExtend = class extends ClassExpression {
    constructor() {
        super()
        console.log('ClassExpressionExtend');
    }
};

console.log(new ClassExpression());
console.log(new ClassExpressionExtend());