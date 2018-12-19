export function uploadFile() {
    return {
        restrict: 'A',
        scope: {
            modal: '<'
        },
        link: (scope, element, attrs) => {
            element.on('change', function () {
                var reader = new FileReader();
                reader.onload = function (e) {
                    scope.modal.getFileContent(reader.result);
                };
                reader.readAsText(element[0].files[0]);

            });
        }
    };
}