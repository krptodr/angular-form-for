/**
 * Associates a custom validation rule with a custom failure message.
 */
interface ValidationRuleCustom {

  /**
   * Custom validation function.
   * If this function returns a rejected promise or a falsy value, the field should be considered invalid.
   */
  rule:CustomValidationFunction;

  /**
   * Custom error message to be shown for failed validations.
   */
  message:string;
};