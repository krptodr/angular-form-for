angular.module("formFor.defaultTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("form-for/templates/checkbox-field.html","<div class=\"form-for-field\" ng-class=\"{\'invalid\': model.error}\">\n  <field-error  error=\"model.error\"\n                left-aligned=\"true\"\n                uid=\"{{model.uid}}-error\">\n  </field-error>\n\n  <input  aria-manager\n          id=\"{{model.uid}}\"\n          name=\"{{attribute}}\"\n          type=\"checkbox\"\n          tabindex=\"{{tabIndex}}\"\n          ng-model=\"model.bindable\"\n          ng-checked=\"checked\"\n          ng-disabled=\"disable || model.disabled\"\n          ng-change=\"changed()\">\n\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{model.uid}}\"\n                uid=\"{{model.uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\">\n  </field-label>\n</div>\n");
$templateCache.put("form-for/templates/collection-label.html","<div class=\"collection-label\">\n  <field-label  ng-if=\"label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <small field-error error=\"model.error\" left-aligned=\"true\"></small>\n</div>\n");
$templateCache.put("form-for/templates/field-error.html","<p  ng-if=\"error\"\n    id=\"{{uid}}\"\n    class=\"field-error\" ng-class=\"{\'left-aligned\': leftAligned}\"\n    ng-bind=\"error\">\n</p>\n");
$templateCache.put("form-for/templates/field-label.html","<label id=\"{{uid}}\" for=\"{{inputUid}}\" class=\"field-label\">\n  <span ng-bind-html=\"bindableLabel\"></span>\n\n  <span ng-if=\"help\" class=\"form-for-tooltip\">\n    <div class=\"form-for-tooltip-icon\">?</div>\n    <div class=\"form-for-tooltip-popover\" ng-bind=\"help\"></div>\n  </span>\n\n  <span ng-if=\"requiredLabel\" class=\"field-label-required-label\" ng-bind=\"requiredLabel\"></span>\n</label>\n");
$templateCache.put("form-for/templates/radio-field.html","<div class=\"form-for-field\" ng-class=\"{\'invalid\': model.error}\">\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{uid}}\"\n                label=\"{{label}}\"\n                help=\"{{help}}\">\n  </field-label>\n\n  <field-error  error=\"model.error\"\n                left-aligned=\"true\"\n                uid=\"{{uid}}-error\">\n  </field-error>\n\n  <label ng-repeat=\"option in options track by $index\">\n    <input  aria-manager\n            id=\"{{uid}}-{{$index}}\"\n            type=\"radio\"\n            name=\"{{attribute}}\"\n            tabindex=\"{{tabIndex}}\"\n            ng-model=\"model.bindable\"\n            ng-value=\"option[valueAttribute]\"\n            ng-disabled=\"disable || model.disabled\">\n\n    <span>\n      {{option[labelAttribute]}}\n    </span>\n  </label>\n</div>");
$templateCache.put("form-for/templates/select-field.html","<div class=\"form-for-field with-icon-after\" ng-class=\"{\'invalid\': model.error}\">\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{enableFiltering ? model.uid + \'-filter\' : model.uid}}\"\n                iud=\"{{model.uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <field-error uid=\"{{model.uid}}-error\" error=\"model.error\"></field-error>\n\n  <span ng-if=\"enableFiltering\"\n        ng-include form-for-include-replace\n        src=\"\'form-for/templates/select-field/_filtered-select.html\'\"></span>\n\n  <span ng-if=\"!enableFiltering && multiple\"\n        ng-include form-for-include-replace\n        src=\"\'form-for/templates/select-field/_multi-select.html\'\"></span>\n\n  <span ng-if=\"!enableFiltering && !multiple\"\n        ng-include form-for-include-replace\n        src=\"\'form-for/templates/select-field/_select.html\'\"></span>\n</div>\n");
$templateCache.put("form-for/templates/submit-button.html","<button class=\"submit-button\" ng-class=\"buttonClass\"\n        ng-disabled=\"disable || model.disabled\"\n        role=\"button\"\n        aria-label=\"bindableLabel\"\n        tabindex=\"{{tabIndex}}\">\n\n  <i ng-if=\"icon\" class=\"submit-button-icon\" ng-class=\"icon\"></i>\n\n  <span ng-bind-html=\"bindableLabel\"></span>\n</button>\n");
$templateCache.put("form-for/templates/text-field.html","<div class=\"form-for-field\" ng-class=\"{ \'invalid\': model.error, \'with-icon-after\': iconAfter, \'with-icon-before\': iconBefore }\">\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{model.uid}}\"\n                iud=\"{{model.uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <field-error uid=\"{{model.uid}}-error\" error=\"model.error\"></field-error>\n\n  <!-- <input> and <textarea> rendered as partials to allow for easier overrides -->\n  <span ng-if=\"!multiline\" ng-include src=\"\'form-for/templates/text-field/_input.html\'\"></span>\n  <span ng-if=\"multiline\"  ng-include src=\"\'form-for/templates/text-field/_textarea.html\'\"></span>\n\n  <i class=\"form-for-input-icon-left\"  ng-class=\"iconBefore\"></i>\n  <i class=\"form-for-input-icon-right\" ng-class=\"iconAfter\"></i>\n</div>\n");
$templateCache.put("form-for/templates/select-field/_filtered-select.html","<!-- Filtered dropdowns use a type-ahead style component -->\n<input  aria-manager\n        id=\"{{model.uid}}-filter\"\n        name=\"{{attribute}}\"\n        type=\"search\"\n        tabindex=\"{{tabIndex}}\"\n        placeholder=\"{{placeholder}}\"\n        ng-disabled=\"disable || model.disabled\"\n        ng-model=\"scopeBuster.filter\"\n        ng-click=\"filterTextClick($event)\"\n        ng-focus=\"open()\"\n        ng-keydown=\"keyDown($event)\">\n\n<ul>\n    <li ng-repeat=\"option in filteredOptions\"\n        ng-class=\"{ \'form-for-typeahead-list-item-active\': option === selectedOption,\n                    \'form-for-typeahead-list-item-hover\':  $index === mouseOverIndex}\"\n        ng-bind=\"option[labelAttribute]\"\n        ng-mousedown=\"selectOption(option)\"\n        ng-mouseenter=\"mouseOver($index)\">\n    </li>\n</ul>\n\n<i class=\"form-for-input-icon-right fa fa-search\"></i>");
$templateCache.put("form-for/templates/select-field/_multi-select.html","<!-- Binding to the \'multiple\' attribute is not supported, even with ng-attr-multiple. -->\n<select aria-manager multiple\n        id=\"{{model.uid}}\"\n        name=\"{{attribute}}\"\n        class=\"select-field-select\"\n        tabindex=\"{{tabIndex}}\"\n        ng-disabled=\"disable || model.disabled\"\n        ng-model=\"model.bindable\"\n        ng-options=\"option[valueAttribute] as option[labelAttribute] for option in filteredOptions\">\n</select>\n\n<i class=\"form-for-select-arrows\"></i>");
$templateCache.put("form-for/templates/select-field/_select.html","<!-- Unfiltered dropdowns use a regular <select> -->\n<select aria-manager\n        id=\"{{model.uid}}\"\n        name=\"{{attribute}}\"\n        class=\"select-field-select\"\n        tabindex=\"{{tabIndex}}\"\n        placeholder=\"{{placeholder}}\"\n        ng-disabled=\"disable || model.disabled\"\n        ng-model=\"model.bindable\"\n        ng-options=\"option[valueAttribute] as option[labelAttribute] for option in filteredOptions\">\n</select>\n\n<i class=\"form-for-select-arrows\"></i>");
$templateCache.put("form-for/templates/text-field/_input.html","<input  aria-manager\n        id=\"{{model.uid}}\"\n        name=\"{{attribute}}\"\n        type=\"{{type}}\"\n        tabindex=\"{{tabIndex}}\"\n        placeholder=\"{{placeholder}}\"\n        ng-model=\"model.bindable\"\n        ng-disabled=\"disable || model.disabled\"\n        form-for-debounce=\"{{debounce}}\"\n        ng-click=\"onFocus()\"\n        ng-blur=\"onBlur()\" />\n");
$templateCache.put("form-for/templates/text-field/_textarea.html","<textarea aria-manager\n          id=\"{{model.uid}}\"\n          name=\"{{attribute}}\"\n          tabindex=\"{{tabIndex}}\"\n          ng-attr-placeholder=\"{{placeholder}}\"\n          rows=\"{{rows}}\"\n          ng-model=\"model.bindable\"\n          ng-disabled=\"disable || model.disabled\"\n          form-for-debounce=\"{{debounce}}\"\n          ng-click=\"onFocus()\"\n          ng-blur=\"onBlur()\">\n</textarea>\n");}]);