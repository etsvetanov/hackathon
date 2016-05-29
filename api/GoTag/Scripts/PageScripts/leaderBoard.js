var LeaderBoard = (function () {
    var self;
    function appendNewRow(userData) {
        var rowTemplate = $(".template");
        var cloneRow = rowTemplate.clone(true); // copy children too
        self.table.append(cloneRow);
        var newRow = $(cloneRow);
        newRow.removeClass("hidden");
        newRow.removeClass("template");
        newRow.attr("data-guid", userData.Guid);
        //
        updateTdsInRow(newRow, userData);
    };

    function addOrUpdateRow(userData) {
        var rowForUpdate = self.table.find('[data-guid="' + userData.Guid + '"]');
        if (rowForUpdate.length!=0) {
            //
            updateTdsInRow(rowForUpdate, userData);
        }
        else {
            //
            appendNewRow(userData);
        }

        self.table
            .find('tr.js-row')
            .sort(compareScore)
            .detach()
            .appendTo(self.table);
    };

    function compareScore(a, b) {
        var valA = $(a).find('[data-prop="Score"]').text(),
            valB = $(b).find('[data-prop="Score"]').text();

        return parseInt(valA) < parseInt(valB);
    }

    function updateTdsInRow(row, userData) {
        for (var prop in userData) {
            var td = row.find('[data-prop="' + prop + '"]');
            if (prop != "AvatarPath") {
                td.text(userData[prop]);
            }
            else {
                var img = td.find("img");
                img.attr("src", userData[prop]);
            }
        }
    };
    return {
        init: function(tableId) {
            self = this;
            self.table = $("#" + tableId);
        },
        addOrUpdateUserScore(userData) {
            addOrUpdateRow(userData);
        },
    };
}())