import 'reflect-metadata';

function logParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number,
) {
  // Ensure target is valid and has the expected metadata
  if (!target || typeof target !== 'object') {
    console.warn('Invalid target for parameter decorator');
    return;
  }

  const existingParameters =
    Reflect.getOwnMetadata('parameters', target, propertyKey) || [];

  existingParameters.push(parameterIndex);

  Reflect.defineMetadata('parameters', existingParameters, target, propertyKey);
}

class Product {
  create(@logParameter name: string, @logParameter price: number): void {
    console.log(`Creating product ${name} with price ${price}`);
  }
}

// Usage
const product = new Product();
product.create('Laptop', 1200); // Logs the creation details
