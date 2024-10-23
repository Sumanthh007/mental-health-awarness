function result_reveal(){
        var contentToPrint = document.getElementById('contentToPrint');
        var printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow.document.write(contentToPrint.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }

    function calculateScore() {
        const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
        const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
        const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
        const q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);
        const q5 = parseInt(document.querySelector('input[name="q5"]:checked').value);
        const q6 = parseInt(document.querySelector('input[name="q6"]:checked').value);
        const q7 = parseInt(document.querySelector('input[name="q7"]:checked').value);
        const q8 = parseInt(document.querySelector('input[name="q8"]:checked').value);
        const q9 = parseInt(document.querySelector('input[name="q9"]:checked').value);
        const q10 = parseInt(document.querySelector('input[name="q10"]:checked').value);
        const q11 = parseInt(document.querySelector('input[name="q11"]:checked').value);
       
        
        const totalScore = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10+q11;

        // Displaying the result
        document.getElementById('result').innerHTML = `Your total score is: ${totalScore}`;
    }    


