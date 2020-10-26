function index_to_shortname( index ){
    return ["xss","sql_injection_timing","code_injection_timing","sql_injection","private_ip","common_files","common_admin_interfaces","x_frame_options","form_upload","html_objects","interesting_responses","http_only_cookies"][index];
}

function index_to_severity( index ){
    return {"xss":"high","sql_injection_timing":"high","code_injection_timing":"high","sql_injection":"high","private_ip":"low","common_files":"low","common_admin_interfaces":"low","x_frame_options":"low","form_upload":"informational","html_objects":"informational","interesting_responses":"informational","http_only_cookies":"informational"}[index_to_shortname(index)];
}

function renderCharts() {
    if( window.renderedCharts )
    window.renderedCharts = true;

    c3.generate({
        bindto: '#chart-issues',
        data: {
            columns: [
                ["Trusted",7,2,2,1,2,1,1,1,2,9,3,1],
                ["Untrusted",0,0,0,0,0,0,0,0,0,0,0,0],
                ["Severity",4,4,4,4,2,2,2,2,1,1,1,1]
            ],
            axes: {
                Severity: 'y2'
            },
            type: 'bar',
            groups: [
                ['Trusted', 'Untrusted']
            ],
            types: {
                Severity: 'line'
            },
            onclick: function (d) {
                var location;

                if( d.name.toLowerCase() == 'severity' ) {
                    location = 'summary/issues/trusted/severity/' + index_to_severity(d.x);
                } else {
                    location = 'summary/issues/' + d.name.toLowerCase() + '/severity/' +
                        index_to_severity(d.x) + '/' + index_to_shortname(d.x);
                }

                goToLocation( location );
            }
        },
        regions: [{"class":"severity-high","start":0,"end":3},{"class":"severity-low","start":4,"end":7},{"class":"severity-informational","start":8}],
        axis: {
            x: {
                type: 'category',
                categories: ["Cross-Site Scripting (XSS)","Blind SQL Injection (timing attack)","Code injection (timing attack)","SQL Injection","Private IP address disclosure","Common sensitive file","Common administration interface","Missing 'X-Frame-Options' header","Form-based File Upload","HTML object","Interesting response","HttpOnly cookie"],
                tick: {
                    rotate: 15
                }
            },
            y: {
                label: {
                    text: 'Amount of logged issues',
                    position: 'outer-center'
                }
            },
            y2: {
                label: {
                    text: 'Severity',
                    position: 'outer-center'
                },
                show: true,
                type: 'category',
                categories: [1, 2, 3, 4],
                tick: {
                    format: function (d) {
                        return ["Informational","Low","Medium","High"][d - 1]
                    }
                }
            }
        },
        padding: {
            bottom: 40
        },
        color: {
            pattern: [ '#1f77b4', '#d62728', '#ff7f0e' ]
        }
    });

    c3.generate({
        bindto: '#chart-trust',
        data: {
            type: 'pie',
            columns: [["Trusted",32],["Untrusted",0]]
        },
        pie: {
            onclick: function (d) { goToLocation( 'summary/issues/' + d.id.toLowerCase() ) }
        },
        color: {
            pattern: [ '#1f77b4', '#d62728' ]
        }
    });

    c3.generate({
        bindto: '#chart-elements',
        data: {
            type: 'pie',
            columns: [["form",14],["cookie",1],["body",11],["server",6]]
        }
    });

    c3.generate({
        bindto: '#chart-severities',
        data: {
            type: 'pie',
            columns: [["high",12],["low",5],["informational",15]]
        },
        color: {
            pattern: [ '#d62728', '#ff7f0e', '#ffbb78', '#1f77b4' ]
        },
        pie: {
            onclick: function (d) {
                goToLocation( 'summary/issues/trusted/severity/' + d.id );
            }
        }
    });

}
