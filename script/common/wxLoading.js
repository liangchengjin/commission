var loading = {
	 loadingWrap:function () {
        var temp = '';
        	temp =  '<div class="loading-div">'+
        				'<div class="loading-wrap">'+
							'<img src="images/loading_white_96x96.gif" alt="" />'+
							'<span>数据加载中</span>'+
						'</div>'	
					'</div>'
		 $('body').append(temp);
		 document.body.style.overflow='hidden'
   	},
   	 loadingErro:function(txt){
   	 	var temp = '';
   	 		temp = '<div class="loading-erro">'+
						'<i class="iconfont icon-imglinktimeout"></i>'+
						'<span class="loading-erro-txt">'+txt+'</span>'+
						'<span class="again-loading">重新加载</span>'+
					 '</div>';
		 $('body').append(temp);
			$('.again-loading').on("tap",function(){
				window.location.reload();
			})
   	},
   	 loadingIng:function(){
   	 	var temps = '';
   	 		temps = '<div class="loading-ing">'+
						'<img src="data:image/gif;base64,R0lGODlhYABgAMQfAEdHR+Pj4x8fH4WFhdbW1isrK+3t7WVlZa2trfj4+PX19czMzMLCwrKyslxcXLq6unBwcPHx8Z2dnd3d3YuLi9nZ2aSkpOvr68bGxpGRkXp6evz8/AAAADMzM5mZmf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkMzAzMWJhMC0zNTZiLTQ1MTktODAzNC05NzljN2I4YjFhMmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTREQTNGQzE2RTZGMTFFNkI5RDRFNTYxNDkzRUFCNzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTREQTNGQzA2RTZGMTFFNkI5RDRFNTYxNDkzRUFCNzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MWFjYWViYy02ZTUzLTRkMzEtODE3MS03Yzg1ZGRkMjY0NDIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZTg5MzczZi1iNmMyLTExNzktOTM0ZS1kM2E0ZmZhMTg4MDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJAQAfACwAAAAAYABgAAAF/+AnjmRpnmi6RYYRbWksz3Rtl5tx7ZcB38CgEBjh8SLDpHIp0hl7zKiU9uRNr7XNz1bdARUKrDAxIRAm4Vr3YsN0OJzOQmxLmO+EhLpbW8D/HHN0MwF4ZhN7VTQbb4AcAIMzhncGVHwzEo5/kTIVkwQVWylrMxECmhwCnDGFn2wypDIQqBwOqyl2n3mwlykVtBwVt6O6AbyKMQC0EMMqnp9pKLEoD7QCSM0oBrqIo70mGwW0EtkxZZ+V0t8lGbQdouUlCrqh6sgmBqeoDPGsxfZPUBygZasfrmeT9JiYRoIAMGMGiX2CWILhCGWoBkSMseHcJGwkLH5AYC0anXkYMP9UMCkjAjd8VdKNSKBPkwUbEyB0KOCAAI0IDIIKnQAvRatJMkUUeQJSBAVakGgoGCCgatUCgmIsEMoVwysZuSZ1G5HDiI8SNR1lVYGgg9W3UVVwnctgQVMURw2BY+GiKK0DMxYAeEv4Gke6dHc5ExtEnKavJwJAKFz4romtiOcGKDpim6GkNdo5yoArQwHKhOOmAJp57gLIFfHAtjHrDzMUDdyiJrx2NebWQgmwnNlC4ZAKGTL4PEHAwe7UvWFhAM61gvFsFyY/t9oBAWcZHakLxUBxmITT26sOsHxjnvigY1dRTS/gQHwlBn4DHy6GAH0A/GARwHTAlTeIBNsVIMH/d0yQUeAtFjynAWgnEZAZf1hMgJoDwmST31z3RTKfVQA8YNAGAWy1gIGrWDAYAB5ct9GMNNZo44045qjjjiQogEEDCAQp5JBECtkABhg2IxkAHTTp5JNQOgkABMZEAGSRWGbZAHvDBMBklGCGCcCAWZaJJQYR6RTmmlFCcKWZcCLQQERfsmlnBwC8GWeZcxpU551rAoDBnnCiaZCagK4JgZWEasnlLRP8meiTACASwY+NGonBo11CICmgU7LI46iklmrqqaimisUGCyAgAQLLNdPAAQAcgICMzUxggQe88mroLR4AIKywB/w6jAEN9KqsBxSKEemw0EIQohgJMCDB/7LKxhpJA9B2C0AGnCqxAQHXYpvtLQh4260DDTA4RAAImIttsxmq6+0B0Q0RwQPyYmssJ8Ha260GotaBQbn98iqBtrc04IDA3XqQZAwV7JpwrwxMPIgBFEAMrQMmchHvxbw2MFsTCyxAbw0BPPBAwTl5POwBHcoQAMIJWzCtCA8M4PMAIQdhgQNEO3ATCgw8LDMADJ8wcsISLMDgAj//nK8MDxRddNAmJOCizLfhQvIDEytAQdU+exAEBFoTfQCnFwwg88QJJIzAySU0gLbPFCwkgQYaSDBb20WTIwMBtAqs8dPKWlBzDHHvPYDaIWkAweUQaAAb24Q7UHAJWasb9v8oOEuAAa4oWCD5AP9KgDnmho/gcOcaSRUwtI+ngKwEFjAQbkOrZwCP5a9nXkICnBP+LysUPKzBzlJskMHquX9QPOaXde4ABKjTyMDqR5dw/eUnDKA9AjpGcLbkJ48/+ggBaH/AygbpLTnXJLiPggTaU25jAKujAIb0dwIFHEB71YuIBFZ3NeuNLwVZ65wGbESA1XmAQQQ8wQY0oL0AbSQB05Mc9Bx4vRg0p3MQ0Ngqvic59MUggyhoXufC1w8DrG4A9CNh8WymPc9FxH57w98JYJi6/kVkfWjLQPfy90AZKCB5WgOMQZBYtQYysYQzSBrhpNgP1aEtdrJo4gw42LZPvhnkAlSkAN5MQESjHLBoB/jcLW7mMwnIUXxinEEFyDiAETYjAUtEQRvBEkhTDVJVQSDe6yaIyCW4rnhgbKQQLqDIzK1Rkmr4W+AuuYoQAAAh+QQJAQAfACwAAAAAYABgAAAF/+AnjmRpnmiaBFUVJGksz3Rtl0lF7EQF38CgEBjg8QLDpHIp0hl7zKiU9uRNr7XNBljdYb8oxYLBWERsXYJtY7hcDFswTUGuMxS1dLbtfsflMQR2ZAt5XTV8fRdngDGDdUgzejMJin0GjTEYjwwYfymTMomKmJkoFZwME5KHMgqWfYymJnSpeIGtKWywfrMoE6lquFUyEbwXt74mG5ucpSihJ5W8z8omF6mFoLkno4o/1idjnJEn0SWv1OEpEakY4CXnJN598OslqJyr5twk6bCy7plIkOoOP2LLjsERmCJAsINPThjjlYzhsnGPqomQNw2Wxi/tGjRYUFEGNk4LPv99cGKkggl6buzFmOBAAAcA2kQ1QMCTJwGVoFKVE1HkydAP/ywFjKEAAoenUBnMYNCzaoN9rrLhYNnDHswLQJdJsAkVagcZCaqqRfDgo4l8jwaycCHzWMkTGDqU3cthKY61a0nGSNDMTk4b9BY2dMCXr98SVAFb/dnw0VEaHfvcHaFgQGO+Z0VJXvvg8ghgdbACSbpZhAWyn8tKnWHgwWi1DNwiDRCgdZYECcJ+WAAg9t4Oh2dM2Hm75wKZpgIcMF5WgAThgwk073nVWgbY1CHorqEAw3afvpxSfwpAtZILtrc/xkJgPYcCD74sb+4eTAbqAmSA3RIJLHBbf1/8F9v/AReY0o5k811RX2MACONLAPE5l95eAiBwzwYVPNDAAwgC4kEB91EAnUUstujiizDGKOOMFkXwgAQe5KjjjjzqKMEDEc4ywQEFCGDkkUgmeWQBB6xiAI49RimlBONlMkGRSmapZQETPCDll1Hmd88BWpaZ5QFQgqmmBxIIhKWZcApQQJprftnmPW/GWSZ+daop5jpk6mnmAU/2OWWVjVwp6JZO3mioj21ZNGSegjJZIo2YZqrpppx26ukUzHhAgQfJZYKAAx04YMGKmVTgwQCwwvpnJhR0YKutAMzmywUWxOrrAA1aeeuwHTRpigIP/PprqV8gQCyxAyCaxAYLUKDs/7KmWPAssQBYMKAQE7x67a/BNlLBts86gIEUBiAwrrKzNlIrusRCYJoNCST7rq8UMAsIAgDQS2wGQaawQAb7+tqAb4BcMIDAwwLQwLckBCBBwrFaUG4JJ20cRAAi3VvBARDf6oCFMQRgLcYZoFxCAxDEDEEDQ3gAwM0AeJDCAwGXjNwMFydMAQPYMSCzzLra0ADOONOMQgIS+OwAWhg3EKQCGhwd8wBBHMA0zlUGoEHJDCewrwT3kmCB1jKbEEAGBxyQwWVf45yBJKjSW3DQv2bgbwkBsL014Ac4YLgDBxzldd3tzbDB0ttOLUMA8LJaQgaCQxBvBocffjcJADMOAf95GTzrMgq8UkBBA9KOsEDmA6hUeOeI4+AA47naIPbNELgEiNmZn0774SZggLsDlgv0QOaflzC84SdogLsFMhqQteCmPS95CRPgDoDHLK4tuIcnaI9CBrhz/eIEmWvQmvkS3c746QJRkHnSzj+fwtKiu/i64LFLAfxOsIHF1S1e60jA9djmOxQMUBzHY5gpYCa4OwlQfzGQHuMsuI4LZA4C4Mvf8CbnvbRlQnxsc1oMHogCmzGOAgJZ4NE0kLwPsPAECpDf17YXjsytawY3PAHPGCcQD7ANhjQI4gkgUDcNCCRwWjMhCZRogu597VLRsR8EMoBFEdIODUwEQO9aBBwnIFDxaTXM1Bk/ZYPZde4AbGQC52jXvDgOQTpvlKIdZ/C2uM2NISEAACH5BAUBAB8ALAAAAABgAGAAAAX/4CeOZGmeaKoQGEYoaSzPdG2XCsbsDAbfwKAQSODxCMOkcinSGXvMqJT25E2vtc0GWN1hvygDA4FgGGxdhk0xIRAmP/As0iCTG2dqt5aouP8JcjNjdmQPNWk1bX9uAYIydYVkE3pVNAaMfxWPMZGSDYEyiTIbfpkEm5woC5J2SKJ7MhenjaooCq12cSijKQm0bqG2JgS5CBiwljEBwBfDKAmeks4pvScrtBVbzycTxofVsSiLp3ncJ4StlLziJpi06+cnBsag7MompcC78iWsuQvuPUHBjJajfrekFYqArt2IX9mEISRmTI0JayMKnqI28cSGB8YOksD4IQKwCdvk/xhoIMECA4Y1AnxL2aQKshLkMsGksSGCAQMRaKYIIMGDUQ8SMEiMkU5SqhFFnrwa8e6UyBkKLmjVamDpCQRHw1p4GoNeLnAjchjxgROY1xMJDGydaw5a2LseEHBM8e+TiRUtXhAzOGOD3LmIZSTAi/cBvxLRWqG1kdONthg9EWveiwIs47ASFggl4U1SPBtV/9T9e3jz1tUniH6+a+F0iWKuhsz6w5lEXNeIu9K44Hn20Qa9RUSYMGGnkLjCPUYAHnx0jAoWjIdl8FjVhqzUX7+dkQBDUe1Ip9r6HV5r9xsRHqA3elMV+PZBpcicD/vLhvYXRDfFBgScN5t6ctznmv8B70WRAAMG4oUgGAlQp4B1WKz0WX9Y/LdZfs9MkF1Y9XGiYIDjcbIBKxIgMOEj0DHY0Yw01mjjjTjmqKOO9FAwwI9ABikkkBQgwOEwFTjAwZJMNumkkw5sYoCPQ1ZpJQVHclKBAE926SUHAlSAgJVkVokAQkp+qWaTDlBZ5psDUIDQmnQy6SacZMrZT511jolnmWf2kyafXjow5Z9XZvkIAVwS+qQASPSIKJFGdpSko2ySteOmnHbq6aeghgrGRwNAMECJqlgAQAEAeJDioqVCICsEgaoygAC44grAZKoEkMGswEJwlRyM5mpslPYhEGywFj1igbHQCqCBoklswID/Bssyq4oE0UJbgAQYJkFArNkCOywYxXZrLADNLnGBBOUuWysnt6oL7QG2AaFAA/EGq0G72xZgL7QDOGcDBtj2O6sFBttyAQQDG9sBAuGaEAAFCs+awbkiBPDAAxzbIBMC+YpAgAMR5wpAQDNMkLGsA7B8ggUO1OyABUNk0MHOHeh5QgMdpCxAATKngHHGD6T4gM0280oDAjzzjDM0GQgcMQCKZWxBlhEcwHTNGgThQNQ7A5BlABBH3LBv/VIQMgkSfF3zARYPAAAAA5xLNs8DzLAAAAOvTcLR/qJKkNw1Q1BCAA7cfbcDwwKw986aegR1t1jLgHaw9tAwAOIONFCC/92O3903CRZM3gHdNChQb65E0xCABxpoYEFyq4AOwVKllw6Z5JM7nYLLHRTgwItTJAAB6EWL0LvjF6kOwKsIIQD66SU8f/cJB6guQY4GeI04x9pnjpPqHbzdjwegf39C+SgMoHrYNiaJ+AHvwX9CBMDv3fxEGgCd8JynvRSkbnIOqNgwGAA6DYRLfx4Z2+RE1xEFLA9xyCPg82KAAek1yBY0Q5zPUABBFEBAdRmYCONAp74PlDA26GuhINiHuKnF4IUn0Nnk6CcP8X0NAh/UYO+w0r+ome8cPmQawEhYwBlAbW9H5AYF5MZDGeAwgntTXD8CkMQDyFCIvqNBBfZWuToQBdABAygjEzdYg5Pt7AAZfEYCqGeCK8ZAAUHslB1FBYQ98tEGpCsd9v44BMaVDnKEXEIASJe3iYQAACH5BAkBAB8ALAAAAABgAGAAAAX/4CeOZGmeaPphTYOpcCzPNB01SI40Ue3/wB9Gp3sFj8jkB0fcKZ9QWVMXrVpJ05xvs7n+LgiPB3GhZRG2BYOx6HllBolYLClLszPFes9QvGMNc3Nod1MzanwMBH8wcoJiizFnMgGJa0aMKI6PFoVNMhiWDJiZJg+Pc6QokzATogwVpSgRm4ISbimsKXqvfrInGKhiDzC6KASvE78pFsIeASrGJgavqsskFc4IXat4KYiW0NerzpEn0iSVogvjKQHOErneJgmhorjtps4M3YYnrqLM5TtRS5CBc/NI8BI1UMUCZw0Q+iuBTJS4hiiaCVNWAh21dZkuWKCQocHBGROc/3UqwYRIRBIbwCWyIyNBgAoVAiSYQWGAT5/EZgQSxo7EkCaq1FkSqGLDBQJQo/pSIeGn1QxFYVxQWeKGS3wfZPKZqsJAhahoOaqwynaAhIspGAiL15WFC7AfXsWCoWAC2r8EuKVo25aHCgUFx/wQO2pnCpuAAQvWRJgtBX4pCKBiSimciqeR/6pdW5ltBs4jgqUKAnDN6K5+Q/8l665qaasrTxiAejKIggABaI+ALDutcIcZblt92S5AcbQVevt4oPwnhayyzD6PemHyDwMIqgP9BXq7TigpxdP8k2A7gQnHkyzoeRv7m93Fo/9RQL20fS/4hQbXHyJVJkt7kZ23TP82bAVVSnlQTYDXL8FQ4MF/jBjg1wTSYeThhyCGKOKIJJYY4gUSaADBiiy26CKLGtSB0QYRGHDBjTjmqCOOBkTQxQUqvijkkBqsd80GNu6o5JIGbCDBkFAKSVc7ESxppZIRBBnllhBoMFCSV4Z5gQFacgmll/mAKaaVcZi55ZTjVLnmlVWW6WaLRQ6E5JxM/pjinTDK2BCNas7Zo3cmJqrooow26uijVyTQgAYHaOCgLB4UwEEBFAy0AAQOhBpqbplAwMGppwpAyDIDiOqqA7+gKisHAKBmBS2vvnrpGxnMOusBRlbxwAG56lpKr77KKkAGXmhQbK6xJjtrAbsiQcH/s7mSyoip0s4KgBIWYPvqAdUykoEA3c4KQYczMECsuKLCuUwAB6SrrLytOAtvqAOo0EISE1igLQkLAGAvqh3MUMG78EJgzQgeACAxAB4EMYAAGAvQb0boHswBZiroK+4BzJ3QwMQTlzyDBRlnjO8ICgzgccKH7cssDChPfMAPALSMcQExOHAwX+Jq8NoJGeQ88QkQiNC0CT5njKYKGHSQLrsliOwqBCCrMIHSEu9cAgAdlN3Bt1BHLYCtJUjQ8aw0e50tDRCADcCqTptt9tMQqy0ArDNwKysNFBxwQMU0MGA34CXoXfYJHfitMgwOoAsAhlU4YLc1jpttit8dxIeR4AV2T01C54+bULnaN4t4gd0AHP0B6nFj4zfQIw5gd+uNo46CBn7z/SEBi084u++6FeC3iHWDPfkItKfgttpoe/iA3WKjEH0KPauN90Cag425CNujwADoHkpQOgzlo3CA3xsPBHsM7f/jtwCyy0KB3YirUP8JF1Ob8K4Rvpwxzn/IY5/aancNu5XLBP87Acuihrt2aEBpA0xBBE/QvZYd8Bpfy1n+IJhAGBBAeRkrANtKUYHmQWCFvescDQqGsctB6nQlvGEQNqjDGsiwh0iAQOcyCEQafE1vsStiEJ2GkRAAACH5BAkBAB8ALAAAAABgAGAAAAX/4CeOZGmeaBo9kvREaSzPdG2XhuTtnmTcwKAw+ODxHsOkcinSGXvMqJT25E2vtUQCWN0BNxusMCAZDCQBW9djMzAQCMZPXLtQzGbKpbauGRpwcA0wdDMWeHgSfF01b4FwDIUzd4hmC1SMMxOPgQ2SMpSVGVsyfTIJgJwInp8pDZV4SKWZMQSqcJetKAaweHMppikKt3AKuikPvQMIs1UyGMQExykJGcoTMcEnF8QNpNMnC8oeYSjaJg/E2OApZb25J+ckm7eR7CkByhTG8bQlqMR+3TvxqpcsE/JELCAGb+CJCKEq7UHob0SEbvwcomCgzEI/ZyYcqZKmkZq1XhUo/4IkEYDYg3KFAnjQoMHCRBoElGWA2aSKIhIb0t1KU0NBBQwYCGSMMQGC06feahzqhaFEkScHRVQgZm/GhgkMwoolFIPC07Maqs64MA6Hkx0+rAakcQGD2LsNTyQ4yxcCBaIxClaiYMIACxcCRTCcEWHB3ccMeJrY25evhcQlFEQ0wwaI0EdRqRGADFmyCbOV+T74ZkJcpbw06D1ad2JDANKQYZtomprvAN0iksUaYisQyW2OcT8mGyMA6t5PMwAucWHBgptCIkyYwJyEgtHK8XZ/pgH6WQvjdSWoEP4uBuw2FDQw/1RD12MB7LYPO8H0jQsS0OcUM8eAtR8DSkmRk/+A0xWiwIELYLbEBgyUB919MbWHQYNXDHOhLrcpNwFrMWWQGnx0PEhaguAseBaBuhgoVoQOBTUABAOoNU0Aji0QgH8lBSnkkEQWaeSRSCb5QQAZHODAk1BGKSWUB0gXZAIBVEDAllx26SWXFQSwRQBOTmnmmQdwOM16X7bpJgEVVHPmnGZmoFEAb+bpJZl09kmlRlrqKWgFZfpJ5wGACjpoBob2aadDeCqaZwB8NmpmmhqxKWmbcS7ZpKVUWlkSloFuCqeYSqaq6qqsturqq60kgMABABzAypoG5LoUOxjQCsCvAHSmiwIXFFusASS20hSwzAJAmyQbGCvtBREAeUX/BBk02+ytkiQw7bQKWDthAw5o2yyMkhD7rbQG7BrFAr6ay+yzhUS77rTIShGABvJqK2wr6t4rbbVKKOBBv806wK16BggM7hAPlIswsBRI2MoGATt8Qb42EDoxsBDQOwI9anacQQbHlbBBBBoba4C4IxDw8a8OYEhCBh3k3AFhQkDAwc8cQEBNwy1zHAMEM1uQ7AgI6KwzujVkADTQj6KgANEOWzyCAh8PgCIJBgDgdM4OBFHA1EB/PcLKLcvAdb8HpIzCAGPrvNsBBRRwgMhoA42oDBtgve4MSGvrQFYpVFB3zgCUMEEBAkQuQAH0CtD3z8D9I7jLM1SgrQTuonDA/+IdeETCAZJL/vcIFFzOQeNF4QuzCBPw68BfNjxAOgAkQp765P9YfjnUMaycK8Hdir24zb9LbgICrgsQupASkL46Cc1HfgIArg+A5AWkdyDyB9kLcAIBrnNQskYakO79CeWL7nrZRRKwe3rkZ7+L8H3bXKMDpDMd/PSHAqldrgOz00UDSOcAa8UPBRs42+V+UhKukU5HA2xeDB4QPfxNA2eLE1oMHpgC7l1OAyUJQPjWJwISoqAC6UuJQ9q3uKqlwIUo8Nnl6DcQ5Y0NANPDHgFjEAH+Tc18DiEd8TL4OxpIwHUagUDdGkgDHEKwA32D3UAUNzYZzsCKKFhA3zKnCz4CALADDpDbCIc4AwxgkQMdIOM0FLC0NWrwBgoIYqvACCuzNa8AfWQC6n53vUAK4XGpo5whlzABvOltfNMIAQAh+QQFAQAfACwAAAAAYABgAAAF/+AnjmRpnmhqIBSFGGksz3RtlwY17AMF38CgEIjg8RDDpHIp0hl7zKiU9uRNr7VEAljdATcbrDBAgUAyE1t3YLs0PJ7GRWwLmO+QQG1du0jgcBI/dDIeeGYUe101CICADYQzh3cYVIszBI6AEpEyGpMQGlsyfDIJFppwFp0xFqAQkKSXMRipcA+sKRevEHMxpSkRf6kSEbkpDa+cv7MoD7YelccoCZ+gFcxVMQHQFqPTJxivA2EowCYbjbYE4DFloAwp5yWZtkjtKROvGgrmzSQJhqXSgy+FK1D3TMwbwQAaroIqrE0iWGLhBwMCHUnoBzHFg1cZTlh8Y2tBxxgJBv+8Ylfx34cJ3coRInPggAdfNBaMk9mkSiISG1DZSlNDwYIGDRgYm1HhgIOnT73VyPDq4YgiTxKKWAAt1owNBBCIFdtgUAoNUNNCiDfDDig2JHIY8VFCaCqcMSY0GMvXKgoFaQM70EC01SsTK1q8MAGNbQwDD/hKRvDtBGDBgTOYNaFA4h24N9Rp5Ph3weTJlU+gxZz2QIPUJBhMcmyjniOWJ8DuPd2XKWvBEKSdQIDHK5BagISbCBCZt+TNKCas/g11AMUSFxgwwBvEAAEC0EUYYOBc8oPwKRg4pQ61WMEEpsuPbVD4hgIL7KEe8JtLr/yxBMB2wwUU5BfVNGH9hwD/BqQtQcB01F1HSAQKPsAdExs8sN5v/NExgXz0RSIMdR2K8aFzCwiIRQADsCYhHRSeplQ7OgW2yjHxjfXAi8ck0IAGB2hQYiQTRPZABTydpOSSTDbp5JNQRiklCSwCYOWVWGaZpXVKKkAABtqFKeaYYmJAQD8BOKDlmmwC4ACPxygAJpl01sngAG3muWVHBNTpJ50E6CnolR3N+eehDGAw6KCFIoooBngu2iZo+PTp6J8EpCnpmm92JOeldqIZ6aZWcnmSl4aCamaDU7bq6quwxirrrHSc4kAHDmiViwETEDABerkwAEAHxBL7Uy4XfKfsBEtNM8EBxUbbQX2EJKDs/7WZqniFAQNIK62udHiH7bUBJDlFUMN6G+2NnYg7rrIVAJsEBreqKy02rFj7LrYTsJqEHfZ6eywrye6LbQDa0hBBBgFLCwC47VZgMLYXmPtVA+k2TOwA8hKyQQATXxvvDQTUq3EHB+BrwgQWWEDtF1pY/EECIIf8Xb85nUwsAEN+MIAAQAtAqX0XFH2BvyNE0KvNZ85gcsMSaCtB0EGza0MCRhuN9AgFh/xyCQqcrAGc4hVANdAAdJd10QbILALNNrv9QdgBO4DbWWcDXYAJFTjAAQcOqMz12kVvTYICS+8r9wdPFwtAA4t/QEDeaJdQgQB//y2A4BcRXnTkF0k87v/X9HibgeElOEC5AB6knnnmDoDt+QXNyrBB18qiPkIFEFg5tg0NrN5Baq+/jtjsCZdAcwUVINxJAh2s3mHxmZuAtecdd5TB6rGbQP3fJ0Qwu+4FBWA25XeP8D0Huc3eNpQQrK4BCuv/NXvtSy6wegHo1Y+CAchr0gYAsLplnMB/lnFfkxCwOgC4DYEnAKDnkpeLsK2ONt77HkoUqKSfUe4AMoBg+MZ3kgmsTgCkU58GY7ABCa7tfRCJH+WGdsAVxkAB9+vI+c7WAfKJ8H/Y0yHlrJaCH57gei/siOrO5kAaGDGChMMfOAiwQwEUIH1FtKHtXHgBGEIkUGgzSQ2eeEQqCXrxVOQrARlpdYM1snGMWnyjEPxWvO7JcQiTe50AsHjHG/Ttb4E7SQgAACH5BAkBAB8ALAAAAABgAGAAAAX/4CeOZGmeaHpJmiZdaSzPdG2XlwbtkAbfwKAQKOHxJMOkcinSGXvMqJT25E2vWFJ1l+2aJhqHY1CxbSG2gGQwkAS8tYNYfDBvbRQ2m/KDpyhzcxo1ZzVremwWfjFygWIMVHczC4h6FIspjY4QCjOFMxmVbBmYKB6Oc4oynzEPomwNpScBqHNvMawoBq9sBrInFrUOl7iSKQi8D78nChDCBMVVMRO8pMsnDMKDKbkmHrwL1yhhtcoo3SSUr0jiJxXCdefGJQp5r+0pp7XsJugirq9i4UOhyZE8aSYu8KIQYSAKBMIGnPBngRckh+eEhSuBrkK1BH7AABh2iwYGYRBA/5JwYmQbiVCvoNWIwMCChAa+ZhAAwLOnhE40BggTOKLIE34iMPBSNSMBBgkeonpw46mnVQfmZqDEwbJHHxHfXpWMUcGC1LMIZlhdC+CAzBgSasUjsaLFCxO8iKpAcLavB7Vs1w74aiJCQTEubYRFRKyVX79VA69leuIBqqw21CHaiGIB1MdodUpm6+AisECUbwBkg7nEBLOgz1KdUeHA6LUQJqAI8ODBWCELOCdsELsvAsIyLN+2SiHnMgUMip+1UEaIh+U9HejFROCzdAkYlgTQgJ3n31IYpEt90DDKAtvYdS8yoN4Dgt9RGjhYnnYRge8EbABHBrdt18V/oElgWv9IEEhWCn2P4bQMBvD1dB4m6U0nnzgI2HaAgX4QgIAECAiH0Ykopqjiiiy26KI4aHQg44w01jjjB2hghEEDCPTo449A+thAeCIAYOORSHYAwEAR8Bjkk1A2EAEESVZZY47iYADllk+GZ+WXHQzkJJdkIhALmFaKWWaZDVCJZpJYXqPlmlxiMIGRb9oIwIbXNElnlO3FmGeYcbYTwY5/ColBey826uijkEYq6aRSXFcAAKktEsACDCwQgIDiKCPAqKNKVMoEDKSa6gLOlUKAA6TGKsBbcECn6q0EALWIBrLKmmkWAdwqLAMTqNSFBAX0KitSXgQ77K0Y4McEAwAo2yv/rV7Y+uytrEoxwQHW9moqJqhuK2yuSwwQrqwFMKspBuYKy+cNCHSwbqwQIIdJAhXEC62+KSxQ7b2jOoDtCARkkEF1QyRggAHG0kOAv6ouwKgMyRLcAYgiQMDBxxwUasMFBJRMAMAfXMApxQxcjMLA6xZgDQoZgAzyzDYYYLLJrZawgbP+mlgYwSLjYDPIBQQxwc4lM5zCxP7KEMG6AAhtwgFHg2zCBhE8HAGoJDBtsrQlRLDytmop20F/MiyQ9cdJk7CBARfUfYEBYIuwtNgERKwCvMNaXcIC4toAwNscNCZCBHbb7bLOfJN9Qrm3uozCqwV0kJsNCCAugAl0N373/xd8E2B5CgpUgAEG6NYqAOJsjyC63YWVPkHeKQ6A+JIJza5vAKWjPBDiHKDgu74JlF6B3xg5gPhcOPi+W+mSZ+m5CtKfsEEFpeuKUQeI4xz97ClALva8+EiAeNzGZ4/C3mL3LM7UiLc2vugxKKA87tdosLsMx5MB8PgmvEVUgHhOO0EAY5C80jFPFs57W9Hu17gZkCxy+Hhd1gRwOgrSTgbb41sCf4E4dynQfTEw385GKIvDHS1MNFjgDOA3Nny47WiC6x35aNDAnT1QFgsAHwc6QKQYolAGCtjbBLw3KRnWYAP8a+IRKSWE0DVOflQEAuNE18EsPtGKd4uiF23ANQavibEUIQAAIfkECQEAHwAsAAAAAGAAYAAABf/gJ45kaZ5oGmTHkQVpLM90bZfB4ezOAd/AoBCY4fEyw6RyKdIZe8yolPbkTa+1RAJY3QG1WGEFAgBACLauwzbJQCCvMLtMB0xq6lpA8+7/5DIadWUQeF01FH19HoAzg3QPVIczGIp9Go0yDo8ADgozeTIJfJYQmJkpA5wAjJqTMQ2lbxaoKqsAfyihKReybxe1KRKrpym7KBK+DcEpCpucCzHHJmOyGlvMKA+rBxvGryYbA74Y2TFknMu64CUMvhTmMQSrDhHrVSgKpKV38amrSE5MG4HAFy1/vG71KzHwQwBfGgwgjGGBmEB2ItzIijQxRYJnj8oxxEjA1wBsgMb/lNGQSwYDeiibVDlQQpyvaDUMNKBAwQKwGQs6CB2a4RMNdI8QlCjyJOCIB76cinowoGpVCi0FDt0KoIE3GRO44XCyw0eJcbKynliQwapbCTIUbJ3bwQEaGRlWmVjRIk4JgzMCSHBL+GQMuXTnsoxhgBNNIGgVabCXIkKDwoVjak08V4JmEg0eqbvhzhKDFBsYUMBMGK6MoJznAuB4wkOdVkFi9VGKgkBb1oTVmiDgIPbcAxVQBGjQQHiNCwwY/DRxwQLw1s7DhTa+dYDEeAouX7eaASeQCBm4DwXAm9mC1eOrPvh846F6ofCCUY0/AMF3JhgUp95CjVzAnwcERrFB/0XcHZTJAuNRsMBXYRgwgHHtNQIhcA8YlckEB3CWoBwGYuaTOS/NlV8t+1nlQXL+JGBBcQ5kWMsCHgzgAQYUduTjj0AGKeSQRBZpZAkgFiDAkkw26SSTBRwwojkRPCCBB1hmqeWWWUrwgD0TKPnkmGQWMGUwBlzJ5ZpsSmDAAWTGOeZj/jzA5p1rPiCmnHwKUMBEauIpqAcS7NlnnH8iFOigd0oA56Fy0hmPnYzi+UCYkJZ5Zi1pVtqmRElmCqWUPhpgpaddPvDfkay26uqrsMYqKyAJUFAABwXgFswEDzTwQAU9ZoOAABwUW2whwSyAwLLLPpBdGPMYKy0Hd2USAf+z2CLAAGWZXHDAtNNKBcgE2Wa7AH0KZkAsuNKKKwe55WLbwKZJ6MkuuNU2cm282T4w3RJh3QsusrUQwG+5GHgohAEQCDytAO5+2MDB2RKAbgwbSLCuw8WaFU8CylLM7Lw3BMWxsQCYV5MWwQKhQAABKEyCAQyIzKyqNDBwcrECOGiCAhcEfYHMbEQX3aYBPGAzAg2sikIHOw9A9AgJCC30xSoYbbRzGxAwscinxRDByQ5kt4EBVgftNA0LaB0dBlgrEDLFWI8tcAciHZa22iYkEEAFFQTwmdtGw8iY0gdj/QHU4AogQcvh7M03CQlUQMDlBFSgWduEMzC1CRN83S//UAN/bkIEkg+NA+aYtxRA5wzki7HB8q69FgAcCOAAvSVULfnalrOeeU2cE/5vXAswty0qaEv+mfCYm0Bz5xMaCbTk3JIA/eUnEAD7s/6cnTrk28suggKwM6B4PKhL/nn5KEwAu+FA+r637SLAf0ICGMCefampM53+TvA66gXJfmnDX/62F4Piue14CGne3rA2wBNMj3A88tH19va/4TBQHrDjXSbEJznIae+DzUif6VDRvr2tcIHQm4H8Okc/c0jQago8YQxlsIH+YXAiN7waDSqYtR8ipIVCy6EOhVcDB0bHfMwgodpM6MEdzgB9bnvhCJtngPWNgIhi49wCOhgrJTDykIqwMuOsghA81tVwjUIIAPTAB0dRtDFzXqxjDPwGOMF1JAQAIfkEBQEAHwAsAAAAAGAAYAAABf/gJ45kaZ5oGgwAMARpLM90bZeB07YOfP/A4I+1aw2EyKRSVCwun1Bacxet1hSJ37T1S2StQIKj03EQbFuAbTJwOAYTsK1CrncqtXQtcHC7Dz5yMhB2ZA4bUls1Gn5+FIIzhXUIiVM0DI1+B5AyAJIdAAozejIKEJl/nDEanx0Zo4oyFqhuHqoqrR2BKKQqtG67tyUZrRCdsSkUvxbCKQqenxgxvSditBCizSgNrYcp1CUbjLQM2ikbY5/MvMgmD78a5jELrQAR7JYnCn20ePIprD4dOQFuhIRfr/7hahXHRMEPOWgdMKAwhoRWmxy2G9GGFqWKKRJAk1SuRMEFvyD/fBEkpkAHCA1pPKi3ksnGDadoSatxwYIGDR6CoVhQQIBRowOyzTjQah3HKQNHNPgVVUaCBhCyao357ajXDggQyaDzSQ2JHEV6lMiJimsKDBq0yn0UI4LXuwIALJgxoJWJFUaE/pIwYwIFuYhV1sWLF4JQEgZG1nEAhK2meykMWEicuCZBxncLZPBMwoKkjzfeZXoQ8gHnxHTngcbboUEyO7F/zPLj1MSCAa8Tux0KYPZdMygmIEAw/EaABw8eQ8wQHDEF6Sc2IOhg3CuEC/8ibK6uVcPOHxEGdD9agLA2BnHJZ22gNMiEA+uRNkMgP6sE8E8wUNx6/nASQH8DnFHF/wYSFGWce5wwQJ4GDIgFhgEaGNebIBIGh0B9LDkAWnNWXPBaBtjJ8cCAR1XFCX9yJahQAh4AUAAAG6rCAHADPGAhSEAGKeSQRBZp5JFIllCBAxw06eSTUELpQIEKGYAABQNkqeWWXGpJAQIUVSBAlGSWyYEAVJpjAJZdtukmBQYwaeacT1KmEAJu5tkmAnT26WRFbOop6AAU+OknoIMOqoyhc9r5D56J6okAAWMyGqUACv6zZqRvhimnpU1OCaSVgXL6JUVJpqrqqqy26uqrqihgwKykcUIAAhIgsMCP2iRgwAXAAgsiJBh4YKyxFpAoyAYRBOvsBbzKYcCx1HrQAP+qnGygwLPP1moFAdVSKwED3j4hK7fPDgsGuOGKS0C0SviKLrfwWjFtu9UikOINzM7LrbpyFItvtQ9ghsS2/jprQLlyECDBwOJiwHBIvyYcrAL1cqIAAxBTa0GaMmxQscUXRFCvrwsnEcEEExhcwgUNdHwsAgBaNXLCKaNwAQE8E1DzD7cuN2kKE1ggswcS7PvBzfMaALAIBvTcM7ZrCC20shss8HDHqKVAsskxbFCB1Dwrm8IDVi/XAMMKPCDzxDhnPEIAZPdsggIEYIABAcOmLfReMlyAAMQTMw1szlbVXXYJCmDAwOMMYAAi2n6DSUMFRofbNQoip2sD3YpT/QH/AZBDnqkIFVSOQEkzJIDB1sb+RwOzs4JdQwSKEzCc46VHHg7lfis9QgQMWCDBtapMkLvLIvQO+V+q+4jkzoo/5vzjJzCg+ulDJjC24rVezzoJEahOn5Gg1y2d+EOpDviQeCteQb3sn3CV6qKDpHzoKdR/gnKVGx9IoqY4s/nvBMBLm9mEIbbcPe0DBzSB4Cq3NiBRT30yiKAJMLA9kCQgdwSYmAYZp7oPVSR9ZPsZCkZYgqD57X3y+B7Z5jcDFpLgfn6zjUJyl7/sXY8GAEybDv+BwsVd4ocy8ZsAe1W3iY3AhiUwQAOs1gDmmSMB+5vAA0sAxShqb3U9lMcG5OZDJ+f9YIywMkEX00gD3pXuPGwUAul6x704/qBxb9yiHUuRt73pERIhAAAh+QQJAQAfACwAAAAAYABgAAAF/+AnjmRpnmj6QSKrvnAszzPQ3R1A73zfQzicy0csGj/B23HJlCVxzehMsXsqpVgUQCAALGbWzowAAQAglayMUOByCwSnVTYx2wETNczhdutiYTJldwAaei9tfVwWgHMwD4R2hyqJimIwgXuRAA6TKRCKbgOYjioSmwCjnicToW55KpkqqH+rJwOuAgcvsigaqBK2KR25DLGlJwuoncIoCLm1J70mB6gPzSlbrsEo0yQNqEPYJ7kFBt3IJBEOqHHjKKCuhtLpIxmoqu8olYppJt4f6qC6oC9FhlzMSgD8tYlRQRQKiLm6prAehmWTlHEQkDBGg1yXKgYxkYDdJmMzPP8cOEBBBgMOMGOKe8HHlYcSQJLMRBBuhgUHQIEe8BcrplEB3F4QyGWiThA8JaptcgkhqNV5Koxq5dABAwwNrgqccDFTBKoMMTRYXeuAStatWjvuCxVNhlRC51RkYMvW7TC4Wwf4NSEhVNIZ4Ag1UIHgAN+1WFO8BKxVgMNbffLt8HDnJgoMVR+vJcqLslYvKSQc9tFgcYoBoiHDklHYtNEDAcYZkBDbKgSUOwxAsB1TAFphDxz3BnqZCADiMMuq+bncQUsmDwpAdzepeuQmB20fP/Sg9wGKWS4cMD1eT3nREiKseg6Xu54AjzWveqZVehbqQUHwxTsUaFeAZ7Y8oBb/BK495OCDEEYo4YQUVjjhBhEYcMGGHHboIYcGRLDBQxdIoAEEKKao4oopaiABQRto+OGMNBow4jsXnMjijjxqcEEENAY5o3zvSMDjkTtKIKOQTF6Q1zg6IiklBBos2WSQT2IT5ZRHagDklUISOY6RXCIpQYxg1njjODmW2SOMGaYJoogkmuhmiy9aqOeefPbp55+AemLABARMkKUnC3hAgQdevRMBoQRESgBBqzwwwKWXekCaJwkEIOmnBCTgyQWYljqABZRO4imonx6axQKmmvrAYFIYUAGroLqKBayxlkrBgFEoACmun4o6Cam9murBbEZ0SiyrqU5iabKmIqDr/wwbXPAsqBVcq8YCFFArqw+2bvtpbu80IG6pGQAbg7DmShqAsSYoEEAAtAYXqbcWrIupBOi+oEC8kU4gZlMMJMwAszRg4MHDjKZAQAb+DnDdC8NuG60JASiscMBjQAyxfSYwEO66q5mwQbzzqpAABh4n7K4MCIj8sAT5qqPuui+s/OwEOZdQQcwKn4BBa42WYDPEwKUQgATiwpCxpN2+S7TMJUTQAAJcI9DAwR9YsPTDG6OwAMWxplwvtGsqdTUDIH+AQdddJy1ComM3+IipFMSNQqcVVNCyDBe8vUDbH2xNt9cmiD02wyoY0AAFFKB6yAYLvO3q4l03NbYHzUnY8ejVJIvAOdcnNPD5zBC+zUDOpyNwggGfq/3Q0FdDbvrpKDDwOXoPRvA2BvSWEHtqn/utT+ZXK7875xJ/LvuDhV/NOgnHo7BBzWNv+g7MV3v7QfYoBPB56ONM8HbpxvOuwgOf242NAq4HPQL5KEQgwdjx6YM70bprH/Re4LCxAa8Z4IuZ/Jzhvhc4zmbos8XbnCfAxcWAAPzTBwGIdr0T4I8xS9NbM+gXM/tVkG6E2x/ElFQQBTBvAWBjTANhcAHuNaBsf/pgoHygwx3yQHF0E6EPeTC3xS1wiDTQWhBjiMQkHq0BGGCiLUIAACH5BAkBAB8ALAAAAABgAGAAAAX/4CeOZGmeaDodRXFMaSzPdG2XUyHsQgHfwKAQeODxDsOkcinSGXvMqJT25E2vNYUCWN0BEwmscNHhcDoYW1dgIxw6nQNBbFuY75xFbV2rwP8dFXQ0AHhmHRtUXTQbDoBwEIMzhncSilU0DY9wAJIyApQcAhEzfDIKAJsdnZ4pDqEckZ+LMhmqHRqtKRWwHIIxpikBtx0BuikasKwpwSgQtxnHKRGgoQ/AtCgYtwBb0igSsAWJKM0ljbcN3ykbZaHR5dkmFrcO5OsnDLACBvGYJxFSqdKDzxUsJCfMjRhwK1dBYb3mmFD4YQIxYw9TDFCWUN6IN6o8ZIyhoBolBBM9/35gwC2MpA0RDBiIcG8Ggn0uRzgxUqBEAoGbrtUIQMEBAA0/ZCQwcKFpU2+EYFEoUeQJwhH0VF095QGA168SYzB16tRAzhh2QvUkkYNnUhFAH4WN8cDo16+yYpDde8FATRQHYJlY0eKFiVsDZri5y7ibDL58aepVG8TRIwD9UlwY0LgxVBRjIZf9bCIDJXg3EGyykCKBhc6N87YOLbqp2RQQ8Mi+YevPVBQM7MK+O5cd7doXJJ8gkCFDcSABECB4yxbCcMYHftVYipysgr/HDFC4fteB0CAKupc9q6uBcPIeSAOBqf6ptK7kvWrAyIS7evBiTJAfAAcQdIUCx/Eln/8YCJDnQAMARrFBerWxR0cD12VASiv0QRbhFQHABgF1rfjn1IJ04PfVAWk8hKBMFnrSwAEEIhDjSDjmqOOOPPbo449AfpBAABUQYOSRSCZ5ZAUB3ChNABkc4MCUVFZpJZUHZGBMAkUq6eWXFTjZSgBSXmnmmQcEEMCXbHrJHz4ZnCmnmRl02eadBGiHT5lz9ulAdnjiqec6fPopZ5qB3vnmOnEaOmcGXCYKppiekOkomlsSKemSTeIIZaGOZrlokKSWauqpqKaqqhgbBLAAAwuM6gkGA0AwwAMfemLAqwz0ygCJgyAAwbDDDvCcJwoQ4OuyDKAIIrHQQqClLglMwCz/s7JiwUC00SLgLBMBYHAttrpsyy20GjCQqxC7jnvtt1IEcC63xkqRrLvXAkuHsPNGK8EFSmxgLb7LYpDtIAxo0G+0DcCLwgXiEuxrmAVFYMHC6LZYQwS8SswAAShGMMEEGw6x6wKZmQAlxsRScDAJEXjc6wIAo0CAdNIdS8MDA/R8awoL1MryiDN0THAAH06AM876ouWzzwaakMADQ//GjscEiJlAA0tLd54NHjzdMwXfGnAxxmJuQPACJQPdtXTqlBDBAxJI8EDbIojtc9wxTEDBwvAa7SsGNcsQwdtel2CABB407oEEKYsQtt4DFB4DBgpza/U0+a47AgOIIzDo/wOOO/71B7RSzhoNW3P78gjJYoBBBQ6PEB3iuJbAeOmPn5MB5fXWcIEFGmjgwetLbPBA6KPy7rgJFQAPKZA3I87ACc43foIFwF/vowJcI4635NmfsBnlFIyP4wKhR01C9iKdwDPlfOtoQOgN3Ag/CgpQADzy0gAd4pq2PxQEjXKW0NHt3na6EhTwBBuYnN7cV5Cthc5yJnjgCSYgPUq1onpv0xgKNHgCBACvgd9QQOi8JQMSmsAAwBtA5NbBPsTp7H3lk8H89Fa/dYSva/mbgQul9ju9oQYfP1xa03DoPBocUGybW4cAl4ZC7OVwBhLQ2+oqlsQGzDAFQzSf/3xGAT4MrsMAAmTAF8F4xRkEIIsDkAAAOeQ5B7aRdR4sVRhXBYTdlS6BfFQC6XhXxUDaYHF/XKMhb2AAutlNkccIAQAh+QQFAQAfACwAAAAAYABgAAAF/+AnjmRpnmhaORznVGksz3Rtl5XQtgJ8/8Dgj7VrOYTIpFJULC6fUFpzF61aSdPWL5G4AjeGy8XQrWU5tgVAIAAsvDWwWGzYmLM1QoHNLhDgMxFzcwZ3UzQba3xsR4AxYYNiZTJnNBaLfAWOj5F0UngyCh2YbB2bKYKdFwozlTIDpGwQpyhynXWUoCkTsWwTtCgKqhcRuYcxB70DwCmQnZMnrigMvR2szCcJw4Up0iaJvRbYzcPX0bomEr0AduPZ293oJAZ7sW/uKKmd5iXeJBq9ZuGr5SxSu37yROSIVSDAwBTCVBUz4U+Eg14ZHnJSBY1JwgfV+F1JEKBChQAdY/9oU8UNi7wEo2I1sBFAAwAAEHyEIsCz54WDMvRFEkmkSKMRHnodDZWhg9On92JM6Em1QssYG+CRIKBjh4A/JBSRAou1AYCnaJee2EC1LYEJIk9EjHRVIZEXJnppmEHAAdq/1rC6dYsSa0FPP8RmuhCjJmDAcUtMHdyWMcRnQC5hkpAigYTHgNXKpex2wkS5gyLTgMVnGYoHZ0H/jRpDwWTSPQuv5QIUyAQLFn6dqHBA9l8HZGkYqICbaoDetC4MMI4WQAPoM7I272kVG4LY1DtkOB2E5Haelk9RCO8UgsMnts+nvFKBvQMMV5Y3r+vFAnUAFmD3xAYB4MbfFQgYN8D/gVaYN9h8VkwA2gHCARPBbegBs151DAxkwFQTMAgHAn45YAGEGqWo4oostujiizA+pAABGDBg44045ngjBgSoBkwAA9wk5JBEFjmAQwrUqOOSTGLg4yYBOFDklFQC4ECBTGa5ZHLYBFnll0MOoKSWZDKAHz5gpinkmGVmeaY7aqpJQJtkcsmMl3FSOUCSdDb5pCNR5jnllR/MyCadPP4JJZ6CAnBkjJBGKumklFZq6SYbVPBAAw9USMsDGhygwXX4BPAAAqiiSpsjFjjgqqsQrLpJBAykaisC5MER5au8PrpJAgvcequncDzA67EOSJBrFRM0IOywpxiLLK8HPCAg/xIXnPrsrcteseu0vGpgpxBJbivsuP2BiywF6ZVHgLm3NkDsJg8coO6xFih6QrPw2roAioAYIMG9vELQoQ0GaNsvAgwwaABPItJwgY3tkgAkwa9qMO8JBji78APvnYCBByR78OYPDUCgMgQzoYABBBg7cIBOKdTabwMEXEtAySWjGwMDK698cDYI2EvwXiotvMCTnvFMMgJADBC0yho8aUAGGDMN7wMRi8CA0yRzVoIBCFBAAQL8Tb2yODJMoMG9fypsq7zKgU0y2yMYQMEAfA9AQV1Sq+0eDUBPi/Qj515bQgN2e7AqAn33DTUJDwgOQUY0JNAqtRubQGsDDSxtw/8EjQdYwt6R+13CBoGrLWsKF3hwwAEUhOzFBhY0Pm/qfZtAgOUDADzQAo23XALvfJ+QgeUPvKiABI0fiLxrJQRguQZdj/NA40MfjzwKCFiOt4qx2y0BhNMHo4HlnbuDQOM+pz+N5RSsWEHjCFwr/1qtT30yPpprnO1MsL/hXE94myCe3ZoXgwKeQAKWM547IgA9sCnrFd+LwQUsB4GKMWN7dvvfCRx4gpQJbnzYqKDTTjQDEpogAetT2+HGoUKe+YwELjTBy2Q4EMY5bXItzOAMKKA2D3iohhLwIApyaALrTW2A2LjA+zyAACUuUYgzmMDyLgdFd2xAcSPEYuYQGCkgJl7qBqiLXP3OqATIpQ6IbBSC3tSYvTjKgGxmQ9tDQgAAOw==" alt=""/>'+
						'<span>正在加载中...</span>'+
				  '</div>';
			  $('body').append(temps);
   	 },
   	 closeIng:function(){
   	 	$('.loading-ing').css('display','none');
   	 },
	closeLoading:function(){
		$('.loading-div').css('display','none');
		document.body.style.overflow='auto'
	}
}
var show = {
	popupTip:function (tip,cancelText,sureText,cancelCallback,sureCallback) {
		var tip= tip,
			cancelText = cancelText,
			sureText = sureText;

			if ($("#dialog3").length === 0){
				var $div = '<div class="ui-dialog" id="dialog3">' +
					'<div class="ui-dialog-cnt"> ' +
					'<div class="ui-dialog-bd">' +
					'<h3></h3> ' +
					'</div> ' +
					'<div class="ui-dialog-ft"> ' +
					'<a class="ui-btn" id = "showCancel"></a>' +
					'<a class="ui-btn ui-btn-primary" id = "showSure"></a>' +
					'</div>' +
					'</div>' +
					'</div>';
				$('body').append($div);
			}
		$('.ui-dialog-bd h3').text(tip);
		$('#showCancel').text(cancelText);
		$('#showSure').text(sureText);

		if (!cancelText && !sureText){
			var $btn = '<a class="ui-btn ui-btn-primary tipSure" id = "tipSure">确定</a>';
			$('#showCancel,#showSure').hide();
			if ($(".tipSure").length == 1){
				return false;
			} else{
				$('.ui-dialog-ft').append($btn);
			}
		} else {
			$('#showCancel,#showSure').show();
		}
		$("#dialog3").show();
		document.documentElement.style.overflow='hidden';
		$('#showCancel').unbind().on('tap', function () {
			$("#dialog3").hide();
			document.documentElement.style.overflow='auto';
			cancelCallback&&cancelCallback();
		});
		$('#showSure').unbind().on('tap', function () {
			$("#dialog3").hide();
			document.documentElement.style.overflow='auto';
			sureCallback&&sureCallback();
		});
		$('#tipSure').unbind().on('tap', function () {
			$("#dialog3").hide();
			document.documentElement.style.overflow='auto';
			$(this).remove();			
				if($('.ui-dialog-bd h3').html() ==='当前购买人数过多，请刷新重试' || 
				   $('.ui-dialog-bd h3').html() === '只能抢购1次'       ||
				   $('.ui-dialog-bd h3').html() === '活动已中止'||
				   $('.ui-dialog-bd h3').html() === '活动已失效'              ||
				   $('.ui-dialog-bd h3').html() === '活动已结束'||
				   $('.ui-dialog-bd h3').html() === '商品已抢完'||
				   $('.ui-dialog-bd h3').html() === '库存不足'||
				   $('.ui-dialog-bd h3').html() === '您已下单，请去订单中心付款！'||
				   $('.ui-dialog-bd h3').html() === '活动未上线'
				){
					window.location.reload();
				}
		});
		this.butColor('#tipSure','touchstart','rgb(238,238,238)','#0bb20c');
		this.butColor('#tipSure','touchend','#ffffff','#0bb20c');
		this.butColor('#showSure','touchstart','rgb(238,238,238)','#0bb20c');
		this.butColor('#showSure','touchend','#ffffff','#0bb20c');
		this.butColor('#showCancel','touchstart','rgb(238,238,238)','#353535');
		this.butColor('#showCancel','touchend','#ffffff','#353535');
	},
	//按钮颜色	
	butColor:function(selector,event,bg,color){
	    $(selector).on(event,function(){
	        $(this).css({
	            'background':bg,
	            'color':color
	        })
	    });
	},
	jump:function(itemIdValue,skuIdValue,numValue){
			if(itemIdValue>0 && skuIdValue>0 && numValue>0){
				$.ajax({
				type:"POST",
				url:$('#orderUrl').val(),
				dataType:"json",
	            data:{
	            	token : $('#token').val(),
	            	activity_id : $('#activityId').val(),
	            	num : numValue,
	            	item_id : itemIdValue,
	            	sku_id : skuIdValue
	            },
				beforeSend:function () {
					loading.loadingWrap();
				},
				success:function(data){
					loading.closeLoading();
					console.log(data)
					if(data.success === true){
						window.location.href = $('#url').val() +'?payment_id='+ data.data
					}else{
						switch(data.code){
							case "3020":
								show.popupTip('只能抢购1次')
							break;
							case "1010 ":
								show.popupTip('当前购买人数过多，请刷新重试')
							break;
							case "1020 ":
								show.popupTip('当前购买人数过多，请刷新重试')
							break;
							case "1030":
								show.popupTip('当前购买人数过多，请刷新重试')
							break;
							case "2020":
								show.popupTip('活动已中止')
							break;
							case "2030":
								show.popupTip('活动已失效')
							break;
							case "2060":
								show.popupTip('活动已结束')
							break;
							case "3010":
								show.popupTip('商品已抢完')
							break;
							case "3040":
								show.popupTip('库存不足')
							break;
							case "8000":
								show.popupTip('您已下单，请去订单中心付款！')
							break;
							case "2000":
								show.popupTip('活动未上线')
							break;
							default:
								show.popupTip('当前购买人数过多，请刷新重试');
							break;	
						}					
					}
				},
				error:function(xhr,type){},
				complete:function(){
					$('.btnJump').removeAttr('disabled');
				}
			});
		} else{
			show.popupTip('当前购买人数过多，请刷新重试')
		}
	}
}

