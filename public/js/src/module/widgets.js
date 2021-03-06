/**
 * This file is used to override the default widgets in enketo-core. 
 */

'use strict';
var widgets = [
    require( '../../../../node_modules/enketo-core/src/widget/note/notewidget' ),
    require( '../../../../node_modules/enketo-core/src/widget/select-desktop/selectpicker' ),
    require( '../../../../node_modules/enketo-core/src/widget/select-mobile/selectpicker' ),
    require( '../../../../node_modules/enketo-core/src/widget/select-autocomplete/autocomplete' ),
    require( '../../../../node_modules/enketo-core/src/widget/geo/geopicker' ),
    require( '../../../../node_modules/enketo-core/src/widget/textarea/textarea' ),
    require( '../../../../node_modules/enketo-core/src/widget/table/tablewidget' ),
    require( '../../../../node_modules/enketo-core/src/widget/radio/radiopicker' ),
    require( '../../../../node_modules/enketo-core/src/widget/date/datepicker-extended' ),
    require( '../../../../node_modules/enketo-core/src/widget/time/timepicker-extended' ),
    require( '../../../../node_modules/enketo-core/src/widget/datetime/datetimepicker-extended' ),
    require( '../../../../node_modules/enketo-core/src/widget/compact/compactpicker' ),
    require( '../../../../node_modules/enketo-core/src/widget/file/filepicker' ),
    require( '../../../../node_modules/enketo-core/src/widget/select-likert/likertitem' ),
    require( '../../../../node_modules/enketo-core/src/widget/distress/distresspicker' ),
    require( '../../../../node_modules/enketo-core/src/widget/horizontal-choices/horizontalchoices' ),
    require( '../../../../node_modules/enketo-core/src/widget/analog-scale/analog-scalepicker' ),
    require( '../../../../node_modules/enketo-core/src/widget/big-image/image-viewer' ),
    require( '../../../../node_modules/enketo-core/src/widget/comment/commentwidget' ),
    require( '../../../../public/widget/discrepancy-note/dn-widget' ),
];

module.exports = widgets;
