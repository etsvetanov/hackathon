var LeaderBoard = (function () {

    function appendNewRow(userData) {
        var rowTemplate = $(".template");
        var cloneRow = rowTemplate.cloneNode(true); // copy children too
        self.table.appendChild(clone);
        var newRow = $(cloneRow);
        newRow.removeClass("hidden");
        newRow.removeClass("template");
        newRow.attr("data-guid", userData.Guid);
        //
        updateTdsInRow(newRow, userData);
    };

    function addOrUpdateRow(userData) {
        var rowForUpdate = self.table.find('[data-guid="' + userData.Guid + '"]');
        if (rowForUpdate) {
            //
            updateTdsInRow(rowForUpdate, userData);
        }
        else {
            //
            appendNewRow(userData);
        }
    };

    function updateTdsInRow(row, userData) {
        for (var prop in userData) {
            newRow.find('[data-prop="' + prop + '"]').text(userData[prop]);
        }
    };
    return {
        init: function(tableId) {
            var self = this;
            self.table = $("#" + tableId);
        },
        addOrUpdateUserScore(userData) {
            addOrUpdateRow(userData);
        },
    };
}())