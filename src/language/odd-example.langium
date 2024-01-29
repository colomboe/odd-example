grammar OddExample

entry Model:
    (deviceType+=DeviceType)+ (device+=Device)*;

DeviceType:
    'deviceType' name=ID '{' (features+=Feature)+ '}';

Feature:
    name=ID;

Device:
    'device' deviceName=ID 'type' deviceType=[DeviceType:ID] '{' (availableFeatures+=AvailableFeature)* '}';

AvailableFeature:
    featureName=[Feature:ID] ':' featureValue=STRING;

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
