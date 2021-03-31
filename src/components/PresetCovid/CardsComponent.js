

//ComponentDidMount
useEffect(() => {
    setTimeout(() => {
        //setLoading(true);
        axios
            .get(`/summary`)
            .then((res) => {
                //setLoading(false);

                if (res.status === 200) {
                    setTotalConfirmed(res.data.Global.TotalConfirmed)
                    setTotalRecovered(res.data.Global.TotalRecovered)
                    setTotalDeaths(res.data.Global.TotalDeaths)
                    setCovidSummary(res.data)
                }

                console.log(res)
                setCountry(props.country)
                const d = new Date()
                const to = fromatDate(d)
                const from = fromatDate(d.setDate(d.getDate() - days))

                //console.log(from, to)
                getCoronaReportByDateRange(props.country, from, to)
                getDeathReportByDateRange(props.country, from, to)
                getRecoveredReportByDateRange(props.country, from, to)
            })
            .catch((error) => {
                console.log(error)
            })

    }, props.order * 4000);
}, [])