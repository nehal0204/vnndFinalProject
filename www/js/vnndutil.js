/**
 * File Name: vnndutil.js
 *
 * Revision History:
 *       Nehal Dogra & Vatsal Nariya, 2022-04-16 : Created
 */
function doValidate_frmaddPlaylist(){
    var form = $("#frmAddPlaylist");
    form.validate(
        {
            rules: {
                SongAdd: {
                    required: true,
                    minlength: 2
                },
                ArtistAdd: {
                    required: true,
                    rangelength: [2,20]
                },
                dateAdd: {
                    required: true,
                }
            },
            messages: {
                SongAdd: {
                    required: "Song name is required",
                    minlength: "Song name must be atleast 2 characters long"
                },
                ArtistAdd: {
                    required: "Artist name is required",
                    rangelength: "Artist name must be within 2-20 characters"
                },
                dateAdd: {
                    required: "Release date is required"
                }
            }
        });
    return form.valid();
}

function doValidate_frmUpdatePlaylist(){
    var form = $("#frmModifyPlaylist");
    form.validate({
        rules: {
            SongModify: {
                required: true,
                minlength: 2
            },
            ArtistModify: {
                required: true,
                rangelength: [2,20]
            },
            dateModify: {
                required: true,
            }
        },
        messages: {
            SongModify: {
                required: "Song name is required",
                minlength: "Song name must be atleast 2 characters long"
            },
            ArtistModify: {
                required: "Artist name is required",
                rangelength: "Artist name must be within 2-20 characters"
            },
            dateModify: {
                required: "Release date is required"
            }
        }
    });
    return form.valid();
}