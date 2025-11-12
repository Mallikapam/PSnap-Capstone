/**
 * 	Mappings for JavaScript code generation
 */

//StageMorph.prototype.enableCodeMapping = true;

StageMorph.prototype.jsCodeMappings = {};
StageMorph.prototype.jsCodeHeaders = {};
StageMorph.prototype.jsCodeMappings['tempvars_delim'] = ', ';
StageMorph.prototype.jsCodeMappings['delim'] = ', ';
StageMorph.prototype.jsCodeMappings.string = '<#1>';
StageMorph.prototype.jsCodeMappings['doSayFor'] = 'console.log(\'<#1>\');';
StageMorph.prototype.jsCodeMappings['bubble'] = 'console.log(\'<#1>\');';
StageMorph.prototype.jsCodeMappings['doIf'] = 'if (<#1>) {\n    <#2>\n}';
StageMorph.prototype.jsCodeMappings['doIfElse'] = 'if (<#1>) {\n    <#2>\n} else {\n    <#3>\n}';
StageMorph.prototype.jsCodeMappings['doReport'] = 'return <#1>;';
StageMorph.prototype.jsCodeMappings['reportSum'] = '(Number(<#1>) + Number(<#2>))';
StageMorph.prototype.jsCodeMappings['reportDifference'] = '(Number(<#1>) - Number(<#2>))';
StageMorph.prototype.jsCodeMappings['reportProduct'] = '(Number(<#1>) * Number(<#2>))';
StageMorph.prototype.jsCodeMappings['reportQuotient'] = '(Number(<#1>) / Number(<#2>))';
StageMorph.prototype.jsCodeMappings['reportModulus'] = '(Number(<#1>) % Number(<#2>))';
StageMorph.prototype.jsCodeMappings['reportLessThan'] = '(Number(<#1>) < Number(<#2>))';
StageMorph.prototype.jsCodeMappings['reportEquals'] = '(Number(<#1>) === Number(<#2>))';
StageMorph.prototype.jsCodeMappings['reportGreaterThan'] = '(Number(<#1>) > Number(<#2>))';
StageMorph.prototype.jsCodeMappings['reportAnd'] = '(<#1> && <#2>)';
StageMorph.prototype.jsCodeMappings['reportOr'] = '(<#1> || <#2>)';
StageMorph.prototype.jsCodeMappings['reportNot'] = '(!<#1>)';
StageMorph.prototype.jsCodeMappings['reportTrue'] = 'true';
StageMorph.prototype.jsCodeMappings['reportFalse'] = 'false';
StageMorph.prototype.jsCodeMappings['reportJoinWords'] = '(<#1> + <#2>)';
StageMorph.prototype.jsCodeMappings['reportStringSize'] = '(<#1>.length)';
StageMorph.prototype.jsCodeMappings['doSetVar'] = '<#1> = <#2>;';
StageMorph.prototype.jsCodeMappings['doChangeVar'] = '<#1> += <#2>;';
StageMorph.prototype.jsCodeMappings['doShowVar'] = 'console.log(\'<#1>\');';
StageMorph.prototype.jsCodeMappings['doDeclareVariables'] = 'var <#1>;';
StageMorph.prototype.jsCodeMappings['reportNewList'] = '[<#1>]';
StageMorph.prototype.jsCodeMappings['reportListLength'] = '<#1>.length';
StageMorph.prototype.jsCodeMappings['reportListItem'] = '<#2>[Number(<#1>)-1]';
StageMorph.prototype.jsCodeMappings['doAddToList'] = '<#2>.push(<#1>);';
