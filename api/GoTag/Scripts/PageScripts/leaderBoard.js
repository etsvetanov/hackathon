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

        updateBarData();
    };

    function compareScore(a, b) {
        var valA = $(a).find('[data-prop="Score"]').text(),
            valB = $(b).find('[data-prop="Score"]').text();

        return parseInt(valA) < parseInt(valB);
    }

    function updateBarData() {
        var teamData = _(self.table.find('[data-team-id]')).chain()
            //group by team id
            .groupBy(function (e) { return $(e).attr('data-team-id'); })
            // calculate team scores return array
            .map(function (teamScores, teamName) {
                return {
                    name: teamName,
                    score: teamScores.reduce(function (a, b) {
                        var valB = parseInt($(b).text());
                        return a + valB;
                    }, 0)
                };
            })
            .value();

        resetBarValues();

        var bestTeam = _.maxBy(teamData, 'score');

        teamData.forEach(function (team) {
            $('.js-team' + team.name)
                .find('.team-progression-fill')
                .css({width: (team.score/bestTeam.score*100) + '%'});
        });
    }

    function resetBarValues() {
        $('[class*=js-team]')
            .find('.team-progression-fill')
            .css({ width: '0%' });
    }

    function updateTdsInRow(row, userData) {
        for (var prop in userData) {
            var td = row.find('[data-prop="' + prop + '"]');
            if (prop == 'Score') {
                td.attr('data-team-id', userData.TeamId);
            }
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
        addOrUpdateUserScore: addOrUpdateRow
    };
}())