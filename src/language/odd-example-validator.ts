import type { ValidationChecks } from 'langium';
import type { OddExampleAstType } from './generated/ast.js';
import type { OddExampleServices } from './odd-example-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: OddExampleServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.OddExampleValidator;
    const checks: ValidationChecks<OddExampleAstType> = {
        
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class OddExampleValidator {

    
}
