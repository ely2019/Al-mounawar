dmx.config({
  "GestionClient": {
    "inputData1": {
      "meta": [
        {
          "name": "identity",
          "type": "text"
        },
        {
          "name": "affected",
          "type": "number"
        }
      ],
      "outputType": "text"
    },
    "dvClients": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "ice",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "email",
          "type": "text"
        },
        {
          "name": "phone",
          "type": "text"
        },
        {
          "name": "type",
          "type": "text"
        },
        {
          "name": "adress",
          "type": "file"
        }
      ],
      "outputType": "text"
    },
    "data_detail": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "ice",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "email",
          "type": "text"
        },
        {
          "name": "phone",
          "type": "text"
        },
        {
          "name": "type",
          "type": "text"
        },
        {
          "name": "adress",
          "type": "file"
        }
      ],
      "outputType": "text"
    }
  },
  "GestionFournisseur": {
    "dvFournisseur": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "ice",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "email",
          "type": "text"
        },
        {
          "name": "phone",
          "type": "text"
        },
        {
          "name": "type",
          "type": "text"
        },
        {
          "name": "adress",
          "type": "file"
        }
      ],
      "outputType": "text"
    },
    "data_detail": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "ice",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "email",
          "type": "text"
        },
        {
          "name": "phone",
          "type": "text"
        },
        {
          "name": "type",
          "type": "text"
        },
        {
          "name": "adress",
          "type": "file"
        }
      ],
      "outputType": "text"
    }
  },
  "GestionProduit": {
    "dvProduit": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "codeProuit",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "categorie_id",
          "type": "text"
        },
        {
          "name": "marque_id",
          "type": "text"
        },
        {
          "name": "quantite",
          "type": "text"
        },
        {
          "name": "uni_price",
          "type": "text"
        },
        {
          "name": "fabrication_at",
          "type": "date"
        },
        {
          "name": "expiration_at",
          "type": "date"
        },
        {
          "name": "thing_type",
          "type": "text"
        }
      ],
      "outputType": "text"
    },
    "data_detail": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "description",
          "type": "file"
        },
        {
          "name": "pays",
          "type": "text"
        },
        {
          "name": "created_at",
          "type": "datetime"
        },
        {
          "name": "updated_at",
          "type": "datetime"
        }
      ],
      "outputType": "array"
    },
    "dvMarque": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "description",
          "type": "file"
        },
        {
          "name": "pays",
          "type": "text"
        },
        {
          "name": "created_at",
          "type": "datetime"
        },
        {
          "name": "updated_at",
          "type": "datetime"
        }
      ],
      "outputType": "text"
    }
  }
});
